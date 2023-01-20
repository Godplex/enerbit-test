import axios from 'axios';
import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { enerbitApi } from '../../api';
import { Meter, MetersResponse, Resp } from '../../interfaces';
import { MeterContext, meterReducer } from './';

export interface MeterState {
    meters: Meter[];
    filteredMeters: Meter[];
    isLoading: boolean;
    currentMeter?: Meter;
}

const METER_INITIAL_STATE: MeterState = {
    meters: [],
    filteredMeters: [],
    isLoading: true,
    currentMeter: undefined
};

export const MeterProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(meterReducer, METER_INITIAL_STATE);

    useEffect(() => {
        getMeters();
    }, [])

    const getMeters = async () => {
        try {
            const { data } = await enerbitApi.get<MetersResponse>('/meters');
            dispatch({ type: '[Meter] - Load items', payload: data.items });
        } catch (error) {
            dispatch({ type: '[Meter] - Load items', payload: [] });
        }
    }

    const filterMeters = (query: string) => {
        if (query) {
            const filterMeters = state.meters.filter(m => m.serial.toLowerCase().includes(query.toLowerCase()));
            dispatch({ type: '[Meter] - Filter items', payload: filterMeters });
        } else {
            dispatch({ type: '[Meter] - Filter items', payload: state.meters });
        }
    }

    const editMeter = async (meter: Meter, id: string): Promise<Resp> => {
        try {
            const { data } = await enerbitApi.patch<Meter>(`/meters/${id}`, meter);
            dispatch({ type: '[Meter] - Update Meter', payload: data });
            return {
                hasError: false,
                message: "Successfully updated meter.",
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status) {
                    return {
                        hasError: false,
                        message: error.response?.data.detail,
                    }
                }
                return {
                    hasError: false,
                    message: error.response?.data.detail[0].msg,
                }
            }
            return {
                hasError: false,
                message: "Unknown error.",
            }
        }
    }

    const deleteMeter = async (id: string): Promise<Resp> => {
        try {
            await enerbitApi.delete<Meter>(`/meters/${id}`);
            dispatch({ type: '[Meter] - Delete Meter', payload: id });
            return {
                hasError: false,
                message: "Successfully deleted meter.",
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status) {
                    return {
                        hasError: false,
                        message: error.response?.data.detail,
                    }
                }
                return {
                    hasError: false,
                    message: error.response?.data.detail[0].msg,
                }
            }
            return {
                hasError: false,
                message: "Unknown error.",
            }
        }
    }

    const createMeter = async (query: string, meter: Meter): Promise<Resp> => {
        try {
            const { data } = await enerbitApi.post<Meter>(`/meters`, meter);
            dispatch({ type: '[Meter] - Create Meter', payload: { query, meter: data } });
            return {
                hasError: false,
                message: "Successfully created meter.",
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status) {
                    return {
                        hasError: false,
                        message: error.response?.data.detail,
                    }
                }
                return {
                    hasError: false,
                    message: error.response?.data.detail[0].msg,
                }
            }
            return {
                hasError: false,
                message: "Unknown error.",
            }
        }
    }

    const loadCurrentMeter = (meter: Meter) => {
        dispatch({ type: '[Meter] - Load Meter', payload: meter });
    }

    return (
        <MeterContext.Provider
            value={{
                ...state,
                filterMeters,
                loadCurrentMeter,
                editMeter,
                deleteMeter,
                createMeter
            }}
        >
            {children}
        </MeterContext.Provider>
    );
};