import React from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { Alert } from 'antd';
import { GridReadyEvent } from '@ag-grid-community/core';
import { GridProps } from '../store/types';

const onGridReady = (params: GridReadyEvent) => {
  /*   params.api?.forEachNode((node, row) => {
    if (row === 0) {
      node.setExpanded(true);
    }
  }); */
};

const GridContainer: React.FC<GridProps> = ({
  rowData,
  modules,
  columnDefs,
  defaultColDef,
  error,
}) => {
  return (
    <div
      style={{
        height: '100%', //gridHeight fix?
        width: '100%',
      }}
      className="ag-theme-alpine"
    >
      {error ? <Alert type="error" showIcon={true} message={error} /> : null}
      {rowData ? (
        <AgGridReact
          modules={modules}
          columnDefs={columnDefs}
          rowData={rowData}
          onGridReady={onGridReady}
          defaultColDef={defaultColDef}
        />
      ) : null}
    </div>
  );
};

export default GridContainer;
