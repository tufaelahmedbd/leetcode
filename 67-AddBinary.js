/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // Resultant string
  let result = "";
  // Indices for a and b
  let i = a.length - 1;
  let j = b.length - 1;
  // Carry
  let carry = 0;
  while (i >= 0 || j >= 0) {
    // Sum of two bits
    let sum = carry;
    if (i >= 0) {
      sum += a[i--] - "0";
    }
    if (j >= 0) {
      sum += b[j--] - "0";
    }
    // Add the bit to the result
    result = (sum % 2) + result;
    // Modify carry
    carry = parseInt(sum / 2);
  }
  // Final check if carry exists
  if (carry > 0) {
    result = 1 + result;
  }
  return result;
};
