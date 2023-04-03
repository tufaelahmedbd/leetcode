var generateMatrix = function (n) {
  let rowBegin = 0;
  let rowEnd = n - 1;
  let colBegin = 0;
  let colEnd = n - 1;
  let x = 0;
  let result = Array(n)
    .fill(0)
    .map((_) => Array(n));

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    //move right
    for (let i = colBegin; i <= colEnd; i++) {
      result[rowBegin][i] = ++x;
    }
    rowBegin++;
    //move down
    for (let i = rowBegin; i <= rowEnd; i++) {
      result[i][colEnd] = ++x;
    }
    colEnd--;
    //move left
    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; i--) {
        result[rowEnd][i] = ++x;
      }
    }
    rowEnd--;
    //move up
    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        result[i][colBegin] = ++x;
      }
    }
    colBegin++;
  }

  return result;
};
console.log(generateMatrix(3));
console.log(generateMatrix(4));
