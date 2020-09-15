import { State } from '../store/types';
import { grid } from '../state/grid';
import { order } from '../state/order';

export const initialState: State = {
  order,
  grid,
};
