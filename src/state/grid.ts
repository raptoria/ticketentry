import { Direction, GridProps } from '../store/types';
import { uppercaseRenderer } from '../GridContainer/renderers/uppercaseRenderer';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ICellRendererParams } from '@ag-grid-community/core';

export const grid: GridProps = {
  rowData: [],
  modules: [ClientSideRowModelModule],
  columnDefs: [
    {
      maxWidth: 100,
      headerName: 'Action',
      field: 'action',
      cellStyle: (params: ICellRendererParams) =>
        params.value === Direction.BUY
          ? {
              backgroundColor: 'var(--buy-background)',
              color: 'var(--primary-color)',
            }
          : {
              backgroundColor: 'var(--sell-background)',
              color: 'var(--primary-color)',
            },
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
      tooltipField: 'comment',
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
  gridHeight: '100%',
  enableBrowserTooltips: true,
};
