import { GridOptions, ColDef, Module } from '@ag-grid-community/core';
import { submitOrder } from '../actions/actions';

export const enum ActionTypes {
  submitOrder = 'SUBMIT_ORDER',
}

export type Action = { type: ActionTypes.submitOrder; order: State['order'] };

export interface Order {
  action: string;
  symbol: string;
  qty: number;
  price: number;
  stopPrice: number;
  orderType: string;
  tif: string;
  comment: string;
}

export interface State {
  order: Order;
  grid: GridProps;
}

interface Actions {
  submitOrder: (...p: Parameters<typeof submitOrder>) => void;
}

export interface StoreContext {
  state: State;
  actions: Actions;
}

export interface StoreContextType {
  state: State;
  actions: Actions;
}

export interface GridProps extends GridOptions {
  modules: Array<Module>;
  error: string | null;
  gridHeight: string;
}
