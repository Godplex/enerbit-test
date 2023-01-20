import { Meter } from "../../interfaces";
import { MeterState } from "./";

type MeterActionType =
  | {
      type: "[Meter] - Load items";
      payload: Meter[];
    }
  | {
      type: "[Meter] - Filter items";
      payload: Meter[];
    }
  | {
      type: "[Meter] - Load Meter";
      payload: Meter;
    }
  | {
      type: "[Meter] - Create Meter";
      payload: { query: string; meter: Meter };
    }
  | {
      type: "[Meter] - Update Meter";
      payload: Meter;
    }
  | {
      type: "[Meter] - Delete Meter";
      payload: string;
    };

export const meterReducer = (
  state: MeterState,
  action: MeterActionType
): MeterState => {
  switch (action.type) {
    case "[Meter] - Load items":
      return {
        ...state,
        meters: [...action.payload],
        filteredMeters: [...action.payload],
        isLoading: false,
      };
    case "[Meter] - Filter items":
      return {
        ...state,
        filteredMeters: [...action.payload],
      };
    case "[Meter] - Load Meter":
      return {
        ...state,
        currentMeter: action.payload,
      };
    case "[Meter] - Create Meter":
      return {
        ...state,
        meters: [...state.meters, action.payload.meter],
        ...(action.payload.meter.serial.includes(action.payload.query) && {
          filteredMeters: [...state.filteredMeters, action.payload.meter],
        }),
      };
    case "[Meter] - Update Meter":
      return {
        ...state,
        meters: state.meters.map((m) => {
          if (m.id === action.payload.id) {
            return {
              ...m,
              ...action.payload,
            };
          }
          return m;
        }),
        filteredMeters: state.filteredMeters.map((m) => {
          if (m.id === action.payload.id) {
            return {
              ...m,
              ...action.payload,
            };
          }
          return m;
        }),
      };
    case "[Meter] - Delete Meter":
      return {
        ...state,
        meters: state.meters.filter((m) => m.id.toString() !== action.payload),
        filteredMeters: state.filteredMeters.filter(
          (m) => m.id.toString() !== action.payload
        ),
      };
    default:
      return state;
  }
};
