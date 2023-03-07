//problem link: https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan&id=programming-skills-i
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let answer = [];
  let len = word1.length >= word2.length ? word1.length : word2.length;

  for (let i = 0; i <= len - 1; i++) {
    if (word1[i] && word2[i]) {
      answer.push(word1[i], word2[i]);
    } else if (word1[i] && !word2[i]) {
      answer.push(word1.substring(i));
      break;
    } else {
      answer.push(word2.substring(i));
      break;
    }
  }
  return answer.join("");
};
console.log(mergeAlternately("abc", "pqr"));
