import { GridOptions, Module } from '@ag-grid-community/core';

import {
  submitOrder,
  editOrder,
  receiveOrder,
  filteredSymbols,
  failedOrder,
} from '../actions/actions';

export interface FieldData {
  name: string[];
  value: any;
  touched: boolean;
  validating: boolean;
  errors: string[];
}

export type OrderKeys = keyof Order;

type FieldError = {
  [key in OrderKeys]?: string[];
};

export interface Fields {
  action: string;
  symbol: string | undefined;
  qty: number;
  price: number;
  stopPrice: number;
  orderType: OrderType;
  tif: string;
  comment: string;
  errors: FieldError;
}

export interface Order {
  fields?: Fields;
  symbols?: string[];
  filteredSymbols?: string[];
  error?: string | null;
  timestamp?: string;
}

export interface State {
  order: Order;
  grid: GridProps;
  [index: string]: Order | GridProps;
}

export const enum ActionTypes {
  submitOrder = 'SUBMIT_ORDER',
  receiveOrder = 'RECEIVE_ORDER',
  editOrder = 'EDIT_ORDER',
  filteredSymbols = 'FILTER_SYMBOLS',
  failedOrder = 'FAILED_ORDER',
}

export type Action =
  | { type: ActionTypes.filteredSymbols; payload: State['order'] }
  | { type: ActionTypes.submitOrder; payload: State['order'] }
  | { type: ActionTypes.receiveOrder; payload: State['order'] }
  | { type: ActionTypes.editOrder; payload: State['order'] }
  | { type: ActionTypes.failedOrder; payload: State['order'] };

export interface Actions {
  failedOrder: (...p: Parameters<typeof failedOrder>) => void;
  submitOrder: (...p: Parameters<typeof submitOrder>) => void;
  receiveOrder: (...p: Parameters<typeof receiveOrder>) => void;
  editOrder: (...p: Parameters<typeof editOrder>) => void;
  filteredSymbols: (...p: Parameters<typeof filteredSymbols>) => void;
}

export interface StoreContext {
  state: State;
  actions: Actions;
}

export interface StoreContextType {
  state: State;
  actions: Actions;
}

export enum OrderType {
  LMT = 'Limit',
  MKT = 'Market',
}

export enum Direction {
  BUY = 'Buy',
  SELL = 'Sell',
}

export interface GridProps extends GridOptions {
  modules: Array<Module>;
  gridHeight: string;
  loading: boolean;
  timestamp?: string;
}
