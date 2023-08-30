var minimumSum = function (num) {
  var myArr = String(num)
    .split("")
    .map((num) => {
      return Number(num);
    });
  var m = myArr.sort((a, b) => a - b);
  var l1 = "".concat(m[0], m[2]);
  var l2 = "".concat(m[1], m[3]);
  return Number(l1) + Number(l2);
};
console.log(minimumSum(2932));
