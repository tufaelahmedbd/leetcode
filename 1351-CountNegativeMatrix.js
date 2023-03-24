var countNegatives = function (grid) {
  let row = grid.length;
  let col = grid[0].length;
  let count = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] < 0) {
        count++;
      }
    }
  }
  return count;
};
console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
console.log(
  countNegatives([
    [3, 2],
    [1, 0],
  ])
);
