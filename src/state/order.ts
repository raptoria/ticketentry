import { Order, OrderType, Direction } from '../store/types';

export const order: Order = {
  fields: {
    action: Direction.BUY,
    comment: '',
    orderType: OrderType.MKT,
    price: 0,
    qty: 0,
    stopPrice: 0,
    symbol: undefined,
    tif: 'DAY',
    errors: {}, //{ qty: ['oops!'] },
  },
  symbols: [
    'AAPL',
    'MSFT',
    'GOOGL',
    'VZ',
    'MMM',
    'NFLX',
    'FB',
    'TWTR',
    'AMZN',
    'EBAY',
  ],
  filteredSymbols: [],
};
