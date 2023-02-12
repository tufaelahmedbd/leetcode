/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let productsOfDigits = 1;
  let sumOfDigits = 0;

  while (n > 0) {
    let digit = n % 10;
    sumOfDigits += digit;
    productsOfDigits *= digit;
    n = Math.floor(n / 10);
  }

  let diff = productsOfDigits - sumOfDigits;
  return diff;
};
console.log(subtractProductAndSum(234));
