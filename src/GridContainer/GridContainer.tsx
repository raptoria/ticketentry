import React, { Fragment } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { Spin } from 'antd';
import { GridProps } from '../store/types';
import styles from './grid.module.scss';

const GridContainer: React.FC<GridProps> = ({
  rowData,
  modules,
  columnDefs,
  defaultColDef,
  overlayNoRowsTemplate,
  frameworkComponents,
  enableBrowserTooltips,
  gridHeight,
  loading,
}) => {
  return (
    <div
      style={{
        height: gridHeight,
        width: '100%',
      }}
      className="ag-theme-alpine"
    >
      {columnDefs ? (
        <Fragment>
          <div className={styles.loadingIndicator}>
            {loading ? <Spin /> : null}
          </div>
          <AgGridReact
            modules={modules}
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={defaultColDef}
            overlayNoRowsTemplate={overlayNoRowsTemplate}
            frameworkComponents={frameworkComponents}
            enableBrowserTooltips={enableBrowserTooltips}
          />
        </Fragment>
      ) : (
        'This grid requires valid columns to display properly.'
      )}
    </div>
  );
};

export default GridContainer;
