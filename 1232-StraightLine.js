//problem link: https://leetcode.com/problems/check-if-it-is-a-straight-line/?envType=study-plan&id=programming-skills-i
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let x0 = coordinates[0][0];
  let y0 = coordinates[0][1];
  let x1 = coordinates[1][0];
  let y1 = coordinates[1][1];
  let dx = x1 - x0;
  let dy = y1 - y0;
  for (let i = 2; i < coordinates.length; ++i) {
    let x = coordinates[i][0];
    let y = coordinates[i][1];
    if ((x - x0) * dy !== (y - y0) * dx) {
      return false;
    }
  }
  return true;
};
console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
);
