//Tufael Ahmed
//Problem link: https://leetcode.com/problems/largest-perimeter-triangle/?envType=study-plan&id=programming-skills-i

/**
 * @param {number[]} A
 * @return {number}
 */
const largestPerimeter = function (A = []) {
  A.sort((a, b) => b - a);
  for (let i = 0; i < A.length - 2; i++) {
    if (A[i] < A[i + 1] + A[i + 2]) {
      return A[i] + A[i + 1] + A[i + 2];
    }
  }
  return 0;
};

console.log(largestPerimeter([2, 1, 2]));
