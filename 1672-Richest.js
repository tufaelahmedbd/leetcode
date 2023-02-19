/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    let total = 0;
    let interval = accounts[i];
    for (let j = 0; j < interval.length; j++) {
      total += interval[j];
    }
    max = Math.max(max, total);
  }
  return max;
};
//timeComplexcity O(m*n)
