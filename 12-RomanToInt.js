/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (string) {
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const strLen = string.length;
  let total = 0;
  for (let i = 0; i < strLen; i++) {
    if (i < strLen - 1 && numerals[string[i + 1]] > numerals[string[i]]) {
      total -= numerals[string[i]];
    } else {
      total += numerals[string[i]];
    }
  }
  return total;
};
console.log(romanToInt("LVIII"));
