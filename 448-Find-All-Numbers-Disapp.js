/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const m = new Set(nums);
  let answers = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!m.has(i)) {
      answers.push(i);
    }
  }
  return answers;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 3, 2, 1]));
