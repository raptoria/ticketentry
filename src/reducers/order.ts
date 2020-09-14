import { Reducer } from 'react';
import { State, Action, ActionTypes } from '../store/types';
import { FieldData } from '../store/types';

export const order: FieldData[] = [
  {
    name: ['action'],
    value: 'buy',
    touched: false,
    validating: false,
    errors: [],
  },
  {
    name: ['symbol'],
    value: '',
    touched: false,
    validating: false,
    errors: [],
  },
  {
    name: ['qty'],
    value: 0,
    touched: false,
    validating: false,
    errors: [],
  },
  {
    name: ['price'],
    value: 0,
    touched: false,
    validating: false,
    errors: [],
  },
  {
    name: ['stopPrice'],
    value: 0,
    touched: false,
    validating: false,
    errors: [],
  },
  {
    name: ['orderType'],
    value: 'mkt',
    touched: false,
    validating: false,
    errors: [],
  },
  {
    name: ['tif'],
    value: 'day',
    touched: false,
    validating: false,
    errors: [],
  },
  {
    name: ['comment'],
    value: '',
    touched: false,
    validating: false,
    errors: [],
  },
];

export const orderReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case ActionTypes.editOrder:
      console.log('running reducer', action.type);
      return { ...state, order: [...action.order] };
  }
  return state;
};
