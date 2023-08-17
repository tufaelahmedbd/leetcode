/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let sum = nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < nums.length; i += 2) {
    result += sum[i];
  }
  return result;
};
console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
