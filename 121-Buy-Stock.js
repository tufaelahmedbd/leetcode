/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxP = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxP) {
      maxP = prices[i] - minPrice;
    }
  }
  return maxP;
};
