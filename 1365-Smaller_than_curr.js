var smallerNumbersThanCurrent = function (nums) {
  let m = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    m.push(count);
  }
  return m;
};
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
