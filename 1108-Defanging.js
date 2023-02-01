/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let result = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      result += "[.]";
    } else {
      result += address[i];
    }
  }
  return result;
};
console.log(defangIPaddr("255.100.50.0"));
