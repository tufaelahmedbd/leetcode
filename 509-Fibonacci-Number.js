/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;

  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    let currentEl = arr[i - 2] + arr[i - 1];
    arr.push(currentEl);
  }
  return arr[n];
};

console.log(fib(4));
