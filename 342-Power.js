/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  return /^10*$/.test(n.toString(4));
};
console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(64));
