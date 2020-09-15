import { GridProps } from '../store/types';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

export const grid: GridProps = {
  rowData: [
    {
      action: 'buy',
      symbol: 'AAPL',
      qty: 10,
      orderType: 'LMT',
      tif: 'DAY',
      price: 100,
      stopPrice: 103,
      comment: 'A comment.',
    },
  ],
  modules: [ClientSideRowModelModule],
  columnDefs: [
    {
      headerName: 'Action',
      field: 'action',
    },
    {
      headerName: 'Symbol',
      field: 'symbol',
    },
    {
      headerName: 'Qty',
      field: 'qty',
    },
    {
      headerName: 'Order Type',
      field: 'orderType',
    },
    {
      headerName: 'TIF',
      field: 'tif',
    },
    {
      headerName: 'Price',
      field: 'price',
    },
    {
      headerName: 'Stop Price',
      field: 'stopPrice',
    },
    {
      headerName: 'Comment',
      field: 'comment',
    },
  ],
  defaultColDef: {
    autoHeight: true,
    sortable: true,
    resizable: true,
    flex: 1,
    filter: true,
    cellStyle: {
      border: '0',
      borderLeft: '1px solid',
      borderColor: '#dde2eb',
    },
  },
  overlayNoRowsTemplate: 'No orders to display.',
  error: null,
  gridHeight: '100%',
};
