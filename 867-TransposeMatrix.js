var transpose = function (matrix) {
  let row = matrix.length - 1;
  let col = matrix[0].length - 1;
  let result = [];
  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= col; j++) {
      if (!result[j]) {
        result[j] = [];
      }
      result[j][i] = matrix[i][j];
    }
  }
  return result;
};
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
