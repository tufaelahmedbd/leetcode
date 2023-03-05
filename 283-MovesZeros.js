//problem link: https://leetcode.com/problems/move-zeroes/?envType=study-plan&id=programming-skills-i
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(0);
      nums.splice(i, 1);
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
