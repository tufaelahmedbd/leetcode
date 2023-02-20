// Problem link: https://leetcode.com/problems/matrix-diagonal-sum/?envType=study-plan&id=programming-skills-i
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  let n = mat.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        sum += mat[i][j];
      }
      if (i + j === n - 1) {
        sum += mat[i][j];
      }
    }
  }
  if (n % 2 !== 0) {
    sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
  }
  return sum;
};
console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
