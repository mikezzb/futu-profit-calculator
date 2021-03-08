const FUTU_US_TRANSACTION_FEES = Object.freeze({
  COMMISSION: 0.0049,
  PLATFORM: 0.005,
  CLEARING: 0.003,
});

const FUTU_US_MIN_FEES = Object.freeze({
  COMMISSION: 0.99,
  PLATFORM: 1,
});

const FUTU_US_BUY = Object.freeze({
  PER_SHARE: FUTU_US_TRANSACTION_FEES,
  MIN_FEES: FUTU_US_MIN_FEES,
});

const FUTU_US_SALE = Object.freeze({
  PER_SHARE: {
    ...FUTU_US_TRANSACTION_FEES,
    TRADING_ACTIVITY: 0.000119,
  },
  PER_AMOUNT: {
    SEC: 0.0000051,
  },
  MIN_FEES: {
    ...FUTU_US_MIN_FEES,
    TRADING_ACTIVITY: 0.01,
    SEC: 0.01,
  },
});

export {
  FUTU_US_BUY,
  FUTU_US_SALE
};
