import { makeObservable, observable, action } from 'mobx';
import { db } from '../config';

class TransactionStore {
  @observable transactions;

  constructor() {
    this.init();
    makeObservable(this);
  }

  @action.bound async init() {
    this.transactions = [];
    await this.loadFromStore();
  }

  @action async loadFromStore() {
    db.collection('transactions').get().then(
      snap => {
        this.setTransactions(snap.docs.map(item => ({
          ...item.data(),
          id: item.id,
        })));
      }
    );
  }

  @action async saveTransaction(transaction) {
    const id = +new Date();
    db.doc(`transactions/${id}`)
      .set({
        ...transaction,
        id,
      })
      .then(() => {
        this.addToStore({
          ...transaction,
          id: String(id),
        });
      });
  }

  @action async deleteTransactions(transactionIds) {
    transactionIds.forEach(id => {
      db.doc(`transactions/${id}`)
        .delete()
        .then(() => this.deleteWithId(id));
    });
  }

  @action.bound addToStore(transaction) {
    this.transactions.unshift(transaction);
  }

  @action.bound deleteWithId(id) {
    const index = this.transactions.findIndex(transaction => transaction.id === id);
    if (index !== -1) {
      this.transactions.splice(index, 1);
    }
    else {
      console.log('Error!');
    }
  }

  @action.bound setTransactions(transactions) {
    this.transactions = transactions;
  }
}

export default TransactionStore;
