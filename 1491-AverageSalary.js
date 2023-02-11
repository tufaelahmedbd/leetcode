/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let min = salary[0];
  let max = salary[0];
  let total = 0;
  for (let i = 0; i < salary.length; i++) {
    min = Math.min(salary[i], min);
    max = Math.max(salary[i], max);
    total += salary[i];
  }
  return (total - min - max) / (salary.length - 2);
};
console.log(average([4000, 3000, 1000, 2000]));
