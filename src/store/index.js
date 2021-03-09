import React, { createContext } from 'react';

import TransactionStore from './TransactionStore';

const transactionStore = new TransactionStore();

export const TransactionContext = createContext();

export default function StoreProvider({ children }) {
  return (
    <TransactionContext.Provider value={transactionStore}>
      {children}
    </TransactionContext.Provider>
  );
}
