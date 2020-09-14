import { State } from './types';
import { grid } from '../reducers/grid';

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
  grid,
};
