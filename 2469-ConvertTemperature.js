/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  let x = celsius * 1.8 + 32;
  let y = celsius + 273.15;
  let m = [];
  m.push(y, x);
  return m;
};
console.log(convertTemperature(36.5));
console.log(convertTemperature(122.11));
