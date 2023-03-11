//problem link: https://leetcode.com/problems/excel-sheet-column-title/
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (m) {
  let res = "";
  let codeA = "A".charCodeAt();
  while (m > 0) {
    m--;
    res = String.fromCharCode(codeA + (m % 26)) + res;
    m = parseInt(m / 26);
  }
  return res;
};
console.log(convertToTitle(701));
