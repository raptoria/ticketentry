import { GridOptions, ColDef, Module } from '@ag-grid-community/core';
import { submitOrder } from '../actions/actions';

export const enum ActionTypes {
  submitOrder = 'SUBMIT_ORDER',
}

export type Action = { type: ActionTypes.submitOrder; order: State['order'] };

export interface State {
  order: {
    action: string;
    symbol: string;
    qty: number;
    price: number;
    stopPrice: number;
    orderType: string;
    tif: string;
    comment: string;
  };
}

export const initialState: State = {
  order: {
    action: 'buy',
    symbol: '',
    qty: 0,
    price: 0.0,
    stopPrice: 0.0,
    orderType: 'Market',
    tif: 'Day',
    comment: '',
  },
};

interface Actions {
  submitOrder: (...p: Parameters<typeof submitOrder>) => void;
}

export interface AppStateContext {
  state: State;
  actions: Actions;
}

export interface AppStateContextType {
  state: State;
  actions: Actions;
}

export interface GridProps extends GridOptions {
  columnDefs: Array<ColDef>;
  error?: string;
  modules?: Array<Module>;
}
