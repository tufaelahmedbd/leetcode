//problem link: https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let ans = -1;
  let mn = Number.MAX_VALUE;
  for (let i = 0; i < points.length; ++i) {
    if (points[i][0] !== x && points[i][1] !== y) continue;
    let d = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y);
    if (d < mn) {
      mn = d;
      ans = i;
    }
  }
  return ans;
};

console.log(
  nearestValidPoint(3, 4, [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
  ])
);
