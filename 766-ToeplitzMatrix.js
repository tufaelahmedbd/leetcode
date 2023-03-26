/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  let row = matrix.length - 1;
  let col = matrix[0].length - 1;
  let map = new Map();
  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= col; j++) {
      let key = i - j;
      if (map.has(key)) {
        if (map.get(key) != matrix[i][j]) return false;
      } else {
        map.set(i - j, matrix[i][j]);
      }
    }
  }
  return true;
};
console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ])
);
console.log(
  isToeplitzMatrix([
    [1, 2],
    [2, 2],
  ])
);
