/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hashmap[diff] !== undefined) {
      return [hashmap[diff], i];
    }
    hashmap[nums[i]] = i;
  }

  return [];
};
console.log(twoSum([3, 3], 6));
