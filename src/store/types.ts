import { GridOptions, Module } from '@ag-grid-community/core';
import { submitOrder, editOrder } from '../actions/actions';

export interface FieldData {
  name: string[];
  value: any;
  touched: boolean;
  validating: boolean;
  errors: string[];
}

export interface Order {
  action: string;
  symbol: string;
  qty: number;
  price: number;
  stopPrice: number;
  orderType: OrderType;
  tif: string;
  comment: string;
}

export interface State {
  order: FieldData[];
  grid: GridProps;
  [index: string]: FieldData[] | GridProps;
}

export const enum ActionTypes {
  submitOrder = 'SUBMIT_ORDER',
  editOrder = 'EDIT_ORDER',
}

export type Action =
  | { type: ActionTypes.submitOrder; order: State['order'] }
  | { type: ActionTypes.editOrder; order: State['order'] };

export interface Actions {
  submitOrder: (...p: Parameters<typeof submitOrder>) => void;
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
  LMT = 'lmt',
  MKT = 'mkt',
}

export interface GridProps extends GridOptions {
  modules: Array<Module>;
  error: string | null;
  gridHeight: string;
}
