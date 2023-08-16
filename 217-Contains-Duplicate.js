/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let m = nums.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < nums.length; i++) {
    if (m[i] === m[i + 1]) {
      return true;
    }
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
