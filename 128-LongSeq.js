/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  let temp = 1;
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1] - 1) {
      temp++;
      count = Math.max(temp, count);
    } else if (nums[i] === nums[i + 1]) {
      count = Math.max(temp, count);
    } else {
      temp = 1;
      count = Math.max(temp, count);
    }
  }
  return count;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
