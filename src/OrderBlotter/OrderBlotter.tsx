import React, { useEffect } from 'react';
import { PageHeader } from 'antd';
import GridContainer from '../GridContainer/GridContainer';
const styles = require('./orderblotter.module.scss');

function OrderBlotter() {
  /*   const headerHeight = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--headerHeight"); */
  /*   const gridHeight = `calc(100% - ${headerHeight} )`; //gets rid of scrollbars */
  return (
    <div className={styles.orderBlotter}>
      <PageHeader
        className="site-page-header"
        title=""
        subTitle="Order Blotter"
        extra="Last Updated On: MAKEMEDYNAMIC"
      />

      <GridContainer />
    </div>
  );
}

export default OrderBlotter;
