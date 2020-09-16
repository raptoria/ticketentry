import { Reducer } from 'react';
import { State, Action, ActionTypes } from '../store/types';

export const grid: Reducer<State['grid'], Action> = (state, action) => {
  switch (action.type) {
    case ActionTypes.submitOrder:
      return { ...state, loading: true };
    case ActionTypes.failedOrder:
      return { ...state, loading: false };
    case ActionTypes.receiveOrder:
      return {
        ...state,
        loading: false,
        timestamp: action.payload.timestamp,
        rowData: [...state.rowData, action.payload.fields],
      };
  }
  return state;
};
