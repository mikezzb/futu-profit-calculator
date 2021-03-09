import React, {
  useReducer, useState, useEffect, useContext
} from 'react';
import {
  Paper, RadioGroup, FormControl, FormControlLabel, FormLabel,
  Radio, TextField, InputAdornment, Input, InputLabel, Button,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { MdLocationOn } from 'react-icons/md';
import { observer } from 'mobx-react-lite';

import { TransactionContext } from '../../store';
import ProfitTable from '../molecules/ProfitTable';
import calculate from '../../helpers/calculate';
import './Calculator.css';
import TransactionStore from '../../store/TransactionStore';

const CalculatorRow = ({ label, children }) =>
  <div className="calculator-row">
    <div className="calculator-row-label">{`${label}:`}</div>
    {children}
  </div>;

const Calculator = () => {
  const transaction = useContext(TransactionContext);
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
      id: 'calculator',
      profit: result.profit,
      percentageChange: result.percentageChange,
      buyPrice: form.buyPrice,
      sellPrice: form.sellPrice,
    };
  };

  return (
    <div>
      <Paper variant="outlined" className="calculator-card" elevation={1}>
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
          <Button
            variant="contained"
            color="primary"
            elevation={2}
            onClick={() => transaction.saveTransaction(generateResult())}
          >
            Record
          </Button>
        </div>
      </Paper>
      <ProfitTable
        rows={
          (transaction.transactions.length ? [
            ...transaction.transactions,
            generateResult(),
          ] : [generateResult()])
        }
        pageSize={5}
      />
    </div>
  );
};

export default observer(Calculator);
