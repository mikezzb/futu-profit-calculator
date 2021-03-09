import React, { useReducer, useState, useEffect } from 'react';
import {
  Button
} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

import './ProfitTable.css';

const columns = [
  {
    field: 'id', hide: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    type: 'date',
    width: 130,
    valueGetter: params => `${params.getValue('id') ? new Date(parseInt(params.getValue('id'), 10)).toLocaleDateString() : 'Calculation'}`,
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

const ProfitTable = ({ rows, pageSize, deleteTransactions }) => {
  const [selected, setSelected] = useState([]);
  return (
    <div className="profit-table">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize || 5}
        sortModel={[{
          field: 'date',
          sort: 'asc',
        }]}
        checkboxSelection
        autoHeight
        onSelectionModelChange={selection => setSelected(selection.selectionModel)}
      />
      {
        Boolean(selected.length) &&
        <div className="std-btn">

          <Button
            variant="outlined"
            color="primary"
            elevation={2}
            onClick={() => deleteTransactions(selected)}
          >
            delete
          </Button>
        </div>
      }
    </div>
  );
};

export default ProfitTable;
