//problem link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === nums[i + 1]) {
      nums.push();
      nums.splice(i, 1);
    }
  }
  // for(let i=0;i<nums.length;i++){
  //     if(nums[i]!=="_"){
  //         count++;
  //     }
  // }
  return nums;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
