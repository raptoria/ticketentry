import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { State } from './types';

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
  grid: {
    rowData: [],
    modules: [ClientSideRowModelModule],
    columnDefs: [],
    defaultColDef: {},
    error: null,
  },
};
