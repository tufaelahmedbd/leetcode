var intersect = function (nums1, nums2) {
  let numsOne = nums1.sort((a, b) => a - b);
  let numsTwo = nums2.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let result = [];
  while (i < numsOne.length && j < numsTwo.length) {
    if (numsOne[i] < numsTwo[j]) {
      i++;
    } else if (numsOne[i] > numsTwo[j]) {
      j++;
    } else {
      result.push(numsOne[i]);
      i++;
      j++;
    }
  }
  return result;
};
console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
