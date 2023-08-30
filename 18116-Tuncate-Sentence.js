var truncateSentence = function (s, k) {
  let arr = s.split(" ");
  let res = "";
  for (var i = 0; i < k; i++) {
    if (i == k - 1) {
      res += arr[i];
    } else {
      res += arr[i] + " ";
    }
  }
  return res;
};
console.log(truncateSentence("Hello how are you Contestant", 4));
