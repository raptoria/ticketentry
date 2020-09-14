import React from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { Alert } from 'antd';
import { GridReadyEvent } from '@ag-grid-community/core';
import { GridProps } from '../store/types';

const onGridReady = (params: GridReadyEvent) => {
  //params?.api.setGridAutoHeight(true);
};

const GridContainer: React.FC<GridProps> = ({
  rowData,
  modules,
  columnDefs,
  defaultColDef,
  overlayNoRowsTemplate,
  error,
  gridHeight,
}) => {
  return (
    <div
      style={{
        height: gridHeight,
        width: '100%',
      }}
      className="ag-theme-alpine"
    >
      {error ? <Alert type="error" showIcon={true} message={error} /> : null}
      {columnDefs ? (
        <AgGridReact
          modules={modules}
          columnDefs={columnDefs}
          rowData={rowData}
          onGridReady={onGridReady}
          defaultColDef={defaultColDef}
          overlayNoRowsTemplate={overlayNoRowsTemplate}
        />
      ) : null}
    </div>
  );
};

export default GridContainer;
