/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;

    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }

  digits.unshift(1);
  return digits;
};
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9, 9]));
