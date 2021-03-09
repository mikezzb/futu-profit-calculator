import {
  FUTU_US_BUY, FUTU_US_SALE, FUTU_HK_BUY, FUTU_HK_SALE
} from '../constants/commissions';

const getFee = (fees, price, numOfShares) => {
  let total = 0;
  const minFees = { ...fees.MIN_FEES };
  // For Per Share Fees
  if ('PER_SHARE' in fees) {
    Object.keys(fees.PER_SHARE).forEach(key => {
      let amount = fees.PER_SHARE[key] * numOfShares;
      if (key in minFees) {
        amount = Math.max(amount, minFees[key]);
        delete minFees[key];
      }
      total += amount;
    });
  }
  // For Per Amount Fees
  if ('PER_AMOUNT' in fees) {
    Object.keys(fees.PER_AMOUNT).forEach(key => {
      let amount = fees.PER_AMOUNT[key] * numOfShares * price;
      if (key in minFees) {
        amount = Math.max(amount, minFees[key]);
        delete minFees[key];
      }
      total += amount;
    });
  }
  // For other fixed fees
  total += (Object.keys(minFees).length ? Object.values(minFees).reduce((acc, fee) => acc + fee) : 0);
  return total;
};

const calculate = ({
  market,
  numOfShares,
  buyPrice,
  sellPrice,
}) => {
  const BUY_FEES = market === 'US' ? FUTU_US_BUY : FUTU_HK_BUY;
  const SALE_FEES = market === 'US' ? FUTU_US_SALE : FUTU_HK_SALE;

  const buyCommission = getFee(BUY_FEES, buyPrice, numOfShares);
  const sellCommission = getFee(SALE_FEES, sellPrice, numOfShares);
  const commission = buyCommission + sellCommission;
  const profit = (sellPrice - buyPrice) * numOfShares - commission;
  const percentageChange = profit / (buyPrice * numOfShares);
  return {
    profit: profit.toFixed(3),
    buyCommission,
    sellCommission,
    percentageChange: (percentageChange * 100).toFixed(3),
  };
};

export default calculate;
