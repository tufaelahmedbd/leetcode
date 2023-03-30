/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let x1 = nums;
  let result = x1.concat(nums);
  return result;
};
console.log(getConcatenation([1, 2, 1]));
