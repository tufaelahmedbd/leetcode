/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";

  for (key in map) {
    result += key.repeat(Math.floor(num / map[key]));
    num %= map[key];
  }

  return result;
};
console.log(intToRoman(58));
console.log(intToRoman(1994));
