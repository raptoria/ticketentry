import React, { useContext } from 'react';
import { PageHeader } from 'antd';
import GridContainer from '../GridContainer/GridContainer';
import { StoreContext } from '../store/store';
const styles = require('./orderblotter.module.scss');

function OrderBlotter() {
  /*   const headerHeight = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--headerHeight"); */
  /*   const gridHeight = `calc(100% - ${headerHeight} )`; //gets rid of scrollbars */

  const { state } = useContext(StoreContext);
  const { rowData, modules, columnDefs, defaultColDef, error } = state.grid;

  return (
    <div className={styles.orderBlotter}>
      <PageHeader
        className="site-page-header"
        title=""
        subTitle="Order Blotter"
        extra="Last Updated On: MAKEMEDYNAMIC"
      />
      <GridContainer
        rowData={rowData}
        modules={modules}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        error={error}
      />
    </div>
  );
}

export default OrderBlotter;
