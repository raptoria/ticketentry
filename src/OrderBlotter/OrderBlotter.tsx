import React, { Fragment, useState, useEffect } from 'react';
import { PageHeader, Button, Row } from 'antd';
const styles = require('./orderblotter.module.scss');

function OrderBlotter() {
  return (
    <div className={styles.orderBlotter}>
      <PageHeader
        className="site-page-header"
        title=""
        subTitle="Order Blotter"
        extra="Last Updated On: MAKEMEDYNAMIC"
      />
      Order blotter
    </div>
  );
}

export default OrderBlotter;
