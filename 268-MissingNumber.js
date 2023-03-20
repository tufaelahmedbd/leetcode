/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let len = nums.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i] - i;
  }
  return len - sum;
};
