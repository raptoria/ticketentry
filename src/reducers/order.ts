import { Reducer } from 'react';
import { State, Action, ActionTypes } from '../store/types';

export const order: Reducer<State['order'], Action> = (state, action) => {
  switch (action.type) {
    case ActionTypes.editOrder:
      return { ...state, ...action.payload };
    case ActionTypes.filteredSymbols:
      return { ...state, filteredSymbols: [...action.payload.filteredSymbols] };
    case ActionTypes.failedOrder:
      return { ...state, error: action.payload.error };
    case ActionTypes.receiveOrder:
      return { ...state, error: null };
  }
  return state;
};
