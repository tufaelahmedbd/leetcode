var maximumCount = function (nums) {
  let posi = 0;
  let neg = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      posi++;
    }
    if (nums[i] < 0) {
      neg++;
    }
  }
  return Math.max(posi, neg);
};
console.log(maximumCount([-2, -1, -1, 1, 2, 3]));
