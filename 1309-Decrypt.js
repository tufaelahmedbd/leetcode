//https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/?envType=study-plan&id=programming-skills-i
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let result = "";
  while (s.length > 0) {
    let lastchar = s.charAt(s.length - 1);
    let alphabet = "";
    if (lastchar === "#") {
      alphabet = numToalphabet(s.substring(s.length - 3, s.length - 1));
      s = s.substring(0, s.length - 3);
    } else {
      alphabet = numToalphabet(s.substring(s.length - 1, s.length));
      s = s.substring(0, s.length - 1);
    }
    result = alphabet + result;
  }
  return result;
};
function numToalphabet(numString) {
  return String.fromCharCode(parseInt(numString) + 96);
}
console.log(freqAlphabets("13#119#21#41"));
