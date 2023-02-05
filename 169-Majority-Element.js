/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      //increment
      map[nums[i]]++;
    } else {
      //add
      map[nums[i]] = 1;
    }
    //contrast
    if (map[nums[i]] >= nums.length / 2) {
      return nums[i];
    }
  }
};
console.log(majorityElement([1, 2, 1, 2, 2, 2, 2]));
