/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const MAX = 2147483647;
  const MIN = -2147483648;

  if (divisor === 0 || (dividend === MIN && divisor === -1)) {
    return MAX;
  }
  if (divisor === dividend) {
    return 1;
  }
  if (dividend < 0 && divisor < 0) {
    return Math.abs(Math.trunc(dividend / divisor));
  } else if (dividend < 0 && divisor > 0) {
    return -Math.abs(Math.trunc(dividend / divisor));
  } else if (dividend > 0 && divisor < 0) {
    return -Math.abs(Math.trunc(dividend / divisor));
  } else {
    return Math.abs(Math.trunc(dividend / divisor));
  }
};
console.log(divide(10, 3));
console.log(divide(7, -3));
console.log(divide(-1, -1));
