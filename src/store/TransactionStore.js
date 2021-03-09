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
        console.log(snap.docs.map(item => ({
          ...item.data(),
          id: item.id,
        })));
        this.transactions = snap.docs.map(item => ({
          ...item.data(),
          id: item.id,
        }));
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
        this.transactions.unshift({
          ...transaction,
          id,
        });
      });
  }

  @action.bound setTransactions(transactions) {
    this.transactions = transactions;
  }
}

export default TransactionStore;
