/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let str = s.trim();
  let len = str.length;
  let i = len - 1;
  while (i >= 0 && str[i] !== " ") i--;
  return len - 1 - i;
};
console.log(lengthOfLastWord("hello world"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
