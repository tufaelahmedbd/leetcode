/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let start = 0;
  let end = n - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let pick = guess(mid);
    if (pick === 0) return mid;
    else if (pick > 0) start = mid + 1;
    else end = mid - 1;
  }
  return start;
};
