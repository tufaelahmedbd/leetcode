//https://leetcode.com/problems/add-digits/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num >= 10) {
    num = parseInt(num / 10) + (num % 10);
  }
  return num;
};
