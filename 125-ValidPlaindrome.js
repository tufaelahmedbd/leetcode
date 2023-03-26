/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "");
  s = s.toLowerCase();
  return s === s.split("").reverse().join("");
};
