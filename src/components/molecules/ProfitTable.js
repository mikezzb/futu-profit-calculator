import React, { useReducer, useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';

import './ProfitTable.css';

const columns = [
  {
    field: 'id', headerName: 'ID', hide: true,
  },
  {
    field: 'date', headerName: 'Date', type: 'date', width: 130, valueGetter: params => `${(params.getValue('id') === 'calculator' ? 'Cal' : new Date(parseInt(params.getValue('id'), 10)).toLocaleDateString())}`,
  },
  {
    field: 'profit', headerName: 'Profit ($)', width: 120, type: 'number',
  },
  {
    field: 'percentageChange', headerName: 'Gain (%)', width: 120, type: 'number',
  },
  {
    field: 'buyPrice', headerName: 'Buy ($)', width: 100, type: 'number',
  },
  {
    field: 'sellPrice', headerName: 'Sell ($)', width: 100, type: 'number',
  },
];

const ProfitTable = ({ rows, pageSize }) => (
  <div className="profit-table">
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={pageSize || 5}
      autoHeight
    />
  </div>
);

export default ProfitTable;
