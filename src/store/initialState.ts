import { State } from './types';
import { grid } from '../reducers/grid';
import { order } from '../reducers/order';

export const initialState: State = {
  order,
  grid,
};
