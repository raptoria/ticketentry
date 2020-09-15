import { GridProps } from '../store/types';
import { uppercaseRenderer } from '../GridContainer/renderers/uppercaseRenderer';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

export const grid: GridProps = {
  rowData: [],
  modules: [ClientSideRowModelModule],
  columnDefs: [
    {
      headerName: 'Action',
      field: 'action',
    },
    {
      headerName: 'Symbol',
      field: 'symbol',
      cellRenderer: 'uppercaseRenderer',
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
      cellRenderer: 'uppercaseRenderer',
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
  frameworkComponents: {
    uppercaseRenderer,
  },
  overlayNoRowsTemplate: 'No orders to display.',
  error: null,
  gridHeight: '100%',
};
