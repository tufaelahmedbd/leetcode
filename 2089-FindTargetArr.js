var targetIndices = function (nums, target) {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result.push(i);
    }
  }
  return result;
};
console.log(targetIndices([1, 2, 5, 2, 3], 2));
