import { GridOptions, Module } from '@ag-grid-community/core';
import { submitOrder, editOrder, receiveOrder } from '../actions/actions';

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

export interface Order {
  action: string;
  symbol: string;
  qty: number;
  price: number;
  stopPrice: number;
  orderType: OrderType;
  tif: string;
  comment: string;
  errors: FieldError;
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
}

export type Action =
  | { type: ActionTypes.submitOrder; payload: State['order'] }
  | { type: ActionTypes.receiveOrder; payload: State['order'] }
  | { type: ActionTypes.editOrder; payload: State['order'] };

export interface Actions {
  submitOrder: (...p: Parameters<typeof submitOrder>) => void;
  receiveOrder: (...p: Parameters<typeof receiveOrder>) => void;
  editOrder: (...p: Parameters<typeof editOrder>) => void;
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
  error: string | null;
  gridHeight: string;
}
