import React from 'react';
import { ICellRendererParams } from '@ag-grid-community/core';

export const uppercaseRenderer: React.FC<ICellRendererParams> = ({ value }) => (
  <span>{value?.toUpperCase()}</span>
);
