/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var rotate = function(matrix) {

// };

var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      var temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < Math.floor(matrix.length / 2); j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - j - 1];
      matrix[i][matrix.length - j - 1] = temp;
    }
  }
};
