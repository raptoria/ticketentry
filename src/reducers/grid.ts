import { Reducer } from 'react';
import { State, Action, ActionTypes } from '../store/types';

export const grid: Reducer<State['grid'], Action> = (state, action) => {
  switch (action.type) {
    case ActionTypes.receiveOrder:
      console.log('running reducer', action.type);
      return {
        ...state,
        rowData: [...state.rowData, action.payload.fields],
      };
  }
  return state;
};
