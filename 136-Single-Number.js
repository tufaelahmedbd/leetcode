/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    answer ^= nums[i];
  }
  return answer;
};
console.log(singleNumber([2, 2, 1]));
