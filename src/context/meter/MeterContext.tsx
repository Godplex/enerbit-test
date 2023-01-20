import { createContext } from 'react';
import { Meter, Resp } from '../../interfaces';

interface ContextProps {
    meters: Meter[];
    filteredMeters: Meter[];
    isLoading: boolean;
    currentMeter?: Meter;
    filterMeters: (query: string) => void;
    loadCurrentMeter: (meter: Meter) => void;
    createMeter: (query: string, meter: Meter) => Promise<Resp>
    editMeter: (meter: Meter, id: string) => Promise<Resp>
    deleteMeter: (id: string) => Promise<Resp>
}

export const MeterContext = createContext({} as ContextProps);