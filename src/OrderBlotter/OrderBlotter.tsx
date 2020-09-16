import React, { useContext } from 'react';
import { PageHeader } from 'antd';
import GridContainer from '../GridContainer/GridContainer';
import { StoreContext } from '../store/store';
import styles from './orderblotter.module.scss';

const OrderBlotter: React.FC = () => {
  const headerHeight = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--header-height');
  const gridHeight = `calc(100% - ${headerHeight} )`; //get rid of  grid scrollbars */

  const { state } = useContext(StoreContext);
  const {
    rowData,
    modules,
    columnDefs,
    defaultColDef,
    overlayNoRowsTemplate,
    frameworkComponents,
    enableBrowserTooltips,
    loading,
  } = state.grid;
  console.log('re-rendering blotter');
  return (
    <div className={styles.orderBlotter}>
      <PageHeader
        className="site-page-header"
        title=""
        subTitle="Order Blotter"
        extra="Last Updated On: MAKEMEDYNAMIC"
      />
      <GridContainer
        gridHeight={gridHeight}
        rowData={rowData}
        modules={modules}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        overlayNoRowsTemplate={overlayNoRowsTemplate}
        frameworkComponents={frameworkComponents}
        enableBrowserTooltips={enableBrowserTooltips}
        loading={loading}
      />
    </div>
  );
};

export default OrderBlotter;
