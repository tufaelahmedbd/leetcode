/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  return Math.trunc((high + 1) / 2) - Math.trunc(low / 2);
};
console.log(countOdds(3, 7));
