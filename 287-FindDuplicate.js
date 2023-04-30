/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return nums[i + 1];
    }
  }
  return -1;
};
