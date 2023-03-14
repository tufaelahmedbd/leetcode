/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let ret = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    ret.push(nums[i] * nums[i]);
  }
  ret.sort(function (a, b) {
    return a - b;
  });
  return ret;
};
console.log(sortedSquares([-7, -3, 2, 3, 11]));
