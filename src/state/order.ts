import { Order, OrderType } from '../store/types';

export const order: Order = {
  action: 'buy',
  comment: '',
  orderType: OrderType.MKT,
  price: 0,
  qty: 0,
  stopPrice: 0,
  symbol: '',
  tif: 'day',
  errors: {}, //{ qty: ['oops!'] },
};
