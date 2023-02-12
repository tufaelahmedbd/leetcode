/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let counter1 = 0;
  let arrN = n.toString(2).split("");
  for (let i = 0; i < arrN.length; i++) {
    if (arrN[i] === "1") {
      counter1++;
    }
  }
  return counter1;
};
