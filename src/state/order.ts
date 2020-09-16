import { Order, OrderType, Direction } from '../store/types';

const symbols = [
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
];

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
  symbols: [...symbols],
  filteredSymbols: [...symbols],
  error: null,
};
