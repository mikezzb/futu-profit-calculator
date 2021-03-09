import { FUTU_US_BUY, FUTU_US_SALE } from '../constants/commissions';

const getFee = (fees, price, numOfShares) => {
  let total = 0;
  // For Per Share Fees
  Object.keys(fees.PER_SHARE).forEach(key => {
    total += Math.max(fees.PER_SHARE[key] * numOfShares, (key in fees.MIN_FEES ? fees.MIN_FEES[key] : 0));
  });
  // For Per Amount Fees
  if ('PER_AMOUNT' in fees) {
    Object.keys(fees.PER_AMOUNT).forEach(key => {
      total += Math.max(fees.PER_AMOUNT[key] * numOfShares * price, (key in fees.MIN_FEES ? fees.MIN_FEES[key] : 0));
    });
  }
  return total;
};

const calculate = ({
  market,
  numOfShares,
  buyPrice,
  sellPrice,
}) => {
  if (market === 'US') {
    const buyCommission = getFee(FUTU_US_BUY, buyPrice, numOfShares);
    const sellCommission = getFee(FUTU_US_SALE, sellPrice, numOfShares);
    const commission = buyCommission + sellCommission;
    const profit = (sellPrice - buyPrice) * numOfShares - commission;
    const percentageChange = profit / (buyPrice * numOfShares);
    return {
      profit: profit.toFixed(3),
      buyCommission,
      sellCommission,
      percentageChange: (percentageChange * 100).toFixed(3),
    };
  }
  return {};
};

export default calculate;
