//problem link: https://leetcode.com/problems/happy-number/?envType=study-plan&id=programming-skills-i

/**
 * @param {number} n
 * @return {boolean}
 */

function isHappy(n) {
  let sum = 0;
  while (n > 0) {
    let m = n % 10;
    n = Math.floor(n / 10);
    sum += m * m;
  }
  if (sum === 1) {
    return true;
  } else if (sum > 1 && sum <= 4) {
    return false;
  }
  return isHappy(sum);
}
console.log(isHappy(19));
