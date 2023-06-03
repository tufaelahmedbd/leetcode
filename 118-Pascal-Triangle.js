var generate = function (numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    result.push(Array(i + 1));
    for (let j = 0; j <= i; j++) {
      j === 0 || j === i
        ? (result[i][j] = 1)
        : (result[i][j] = result[i - 1][j - 1] + result[i - 1][j]);
    }
  }
  return result;
};
console.log(generate(5));
