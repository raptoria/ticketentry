import { Reducer } from 'react';
import { State, Action, ActionTypes } from '../store/types';

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case ActionTypes.submitOrder:
      return { ...state }; //do stuff here

      break;
  }
  return state;
};
