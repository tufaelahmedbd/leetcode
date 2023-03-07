//problem link: https://leetcode.com/problems/find-the-difference/?envType=study-plan&id=programming-skills-i
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sSplit = s.split("").sort();
  let tSplit = t.split("").sort();
  for (let i = 0; i < tSplit.length; i++) {
    if (tSplit[i] !== sSplit[i]) {
      return tSplit[i];
    }
  }
};
console.log(findTheDifference("abcd", "abcde"));
