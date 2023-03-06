//problem link: https://leetcode.com/problems/reshape-the-matrix/?envType=study-plan&id=programming-skills-i
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  let count = mat.length * mat[0].length;
  if (count !== r * c) return mat;
  let res = [];
  let arr = [];
  let idx = 0;
  for (let v of mat) {
    arr.push(...v);
  }
  for (let i = 0; i < r; i++) {
    res.push([]);
    for (let j = 0; j < c; j++) {
      res[i][j] = arr[idx];
      idx++;
    }
  }
  return res;
};
console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
);
