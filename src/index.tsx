import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import 'antd/dist/antd.css';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import { StoreProvider } from './store/store';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
