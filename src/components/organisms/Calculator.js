import React, { useReducer, useState, useEffect } from 'react';
import {
  Paper, RadioGroup, FormControl, FormControlLabel, FormLabel,
  Radio, TextField, InputAdornment, Input, InputLabel, Button,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { MdLocationOn } from 'react-icons/md';

import calculate from '../../helpers/calculate';
import './Calculator.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'profit', headerName: 'Profit ($)', width: 120, type: 'number',
  },
  {
    field: 'percentageChange', headerName: 'Gain (%)', width: 120,
  },
  {
    field: 'buyPrice', headerName: 'Buy ($)', width: 100, type: 'number',
  },
  {
    field: 'sellPrice', headerName: 'Sell ($)', width: 100, type: 'number',
  },
  {
    field: 'commission', headerName: 'Commission ($)', width: 160, type: 'number',
  },
];

const CalculatorRow = ({ label, children }) =>
  <div className="calculator-row">
    <div className="calculator-row-label">{`${label}:`}</div>
    {children}
  </div>;

const Calculator = () => {
  const [form, dispatchForm] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {
      market: 'US',
      numOfShares: 100,
      buyPrice: 15,
      sellPrice: 15,
    }
  );

  const generateResult = () => {
    const result = calculate(form);
    return {
      id: Date.now(),
      profit: result.profit,
      percentageChange: result.percentageChange,
      buyPrice: form.buyPrice,
      sellPrice: form.sellPrice,
      commission: result.buyCommission + result.sellCommission,
    };
  };

  return (
    <div>
      <Paper className="calculator-card" elevation={1}>
        <CalculatorRow label="Market">
          <RadioGroup row aria-label="market" name="market" value={form.market} onChange={e => dispatchForm({ market: e.target.value })}>
            <FormControlLabel value="US" control={<Radio />} label="US" />
            <FormControlLabel value="HK" control={<Radio />} label="HK" />
          </RadioGroup>
        </CalculatorRow>
        <CalculatorRow label="Number of Shares">
          <Input
            value={form.numOfShares}
            onChange={e => dispatchForm({ numOfShares: e.target.value })}
            startAdornment={<InputAdornment position="start">N</InputAdornment>}
          />
        </CalculatorRow>
        <CalculatorRow label="Buy">
          <Input
            value={form.buyPrice}
            onChange={e => dispatchForm({ buyPrice: e.target.value })}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </CalculatorRow>
        <CalculatorRow label="Sell">
          <Input
            value={form.sellPrice}
            onChange={e => dispatchForm({ sellPrice: e.target.value })}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </CalculatorRow>
        <div className="calculator-btn">
          <Button variant="contained" color="primary" elevation={2}>Record</Button>
        </div>
      </Paper>
      <Paper className="profit-table-container" elevation={1}>
        <div className="profit-table">
          <DataGrid
            rows={[
              generateResult(),
            ]}
            columns={columns}
            pageSize={5}
          />
        </div>
      </Paper>
    </div>
  );
};

export default Calculator;
