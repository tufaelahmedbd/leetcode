/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  var product = 1;

  for (let j = 0; j < nums.length; j++) {
    product = product * nums[j];
  }
  if (product > 0) {
    return 1;
  } else if (product < 0) {
    return -1;
  } else {
    return 0;
  }
};
