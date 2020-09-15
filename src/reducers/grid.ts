import { Reducer } from 'react';
import { State, Action, ActionTypes } from '../store/types';

export const grid: Reducer<State['grid'], Action> = (state, action) => {
  switch (action.type) {
    case ActionTypes.submitOrder:
      console.log('running reducer', action.type);
      return { ...state }; //do stuff here
  }
  return state;
};
