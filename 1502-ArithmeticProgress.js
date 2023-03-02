//problem link: https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  let points = arr.sort(function (a, b) {
    return a - b;
  });
  let d = points[1] - points[0];
  for (let i = 2; i < points.length; ++i) {
    if (points[i] - points[i - 1] !== d) {
      return false;
    }
  }
  return true;
};
console.log(canMakeArithmeticProgression([1, 2, 4]));
