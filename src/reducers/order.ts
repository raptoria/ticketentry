import { Reducer } from 'react';
import { State, Action, ActionTypes } from '../store/types';

export const order: Reducer<State['order'], Action> = (state, action) => {
  switch (action.type) {
    case ActionTypes.editOrder:
      console.log('running reducer', action.type);
      return [...action.order];
  }
  return state;
};
