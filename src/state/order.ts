import { Order, OrderType, Direction } from '../store/types';

export const order: Order = {
  action: Direction.BUY,
  comment: '',
  orderType: OrderType.MKT,
  price: 0,
  qty: 0,
  stopPrice: 0,
  symbol: '',
  tif: 'DAY',
  errors: {}, //{ qty: ['oops!'] },
};
