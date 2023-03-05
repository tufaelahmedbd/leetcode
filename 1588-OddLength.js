//problem link: https://leetcode.com/problems/sum-of-all-odd-length-subarrays/?envType=study-plan&id=programming-skills-i

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j += 2) {
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
    }
  }
  return sum;
};
console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
