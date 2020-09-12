import React, { Fragment, useState, useEffect } from 'react';
import SplitPane from 'react-split-pane';
import TicketForm from '../TicketForm/TicketForm';
import OrderBlotter from '../OrderBlotter/OrderBlotter';
import './app.module.scss';

function App() {
  return (
    <SplitPane split="horizontal" defaultSize="max-content">
      <TicketForm />
      <OrderBlotter />
    </SplitPane>
  );
}

export default App;
