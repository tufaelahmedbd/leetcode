/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let x = [...new Set(nums.sort((a, b) => b - a))];

  for (let i = 0; i < x.length; i++) {
    if (x.length >= 3) {
      return x[2];
    } else if (x.length === 2) {
      return x[0];
    } else {
      return x[0];
    }
  }
};
console.log(thirdMax([3, 2, 1]));
