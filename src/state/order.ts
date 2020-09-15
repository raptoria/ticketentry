import { FieldData } from '../store/types';

export const order: FieldData[] = [
  {
    name: ['action'],
    value: 'buy',
    touched: false,
    validating: false,
    errors: [],
  },
  {
    name: ['symbol'],
    value: '',
    touched: false,
    validating: false,
    errors: [],
  },
  {
    name: ['qty'],
    value: 0,
    touched: false,
    validating: false,
    errors: [],
  },
  {
    name: ['price'],
    value: 0,
    touched: false,
    validating: false,
    errors: [],
  },
  {
    name: ['stopPrice'],
    value: 0,
    touched: false,
    validating: false,
    errors: [],
  },
  {
    name: ['orderType'],
    value: 'mkt',
    touched: false,
    validating: false,
    errors: [],
  },
  {
    name: ['tif'],
    value: 'day',
    touched: false,
    validating: false,
    errors: [],
  },
  {
    name: ['comment'],
    value: '',
    touched: false,
    validating: false,
    errors: [],
  },
];
