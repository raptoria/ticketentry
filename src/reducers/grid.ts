import { Reducer } from 'react';
import { State, Action, ActionTypes } from '../store/types';

export const grid: Reducer<State['grid'], Action> = (state, action) => {
  switch (action.type) {
    case ActionTypes.failedOrder:
      return { ...state, loading: false };
    case ActionTypes.submitOrder:
      return { ...state, loading: true };
    case ActionTypes.receiveOrder:
      console.log('running reducer', action.type);
      return {
        ...state,
        loading: false,
        rowData: [...state.rowData, action.payload.fields],
      };
  }
  return state;
};
