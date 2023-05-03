/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let a = [];
  let b = [];

  for (let e of set1) {
    if (!set2.has(e)) {
      a.push(e);
    }
  }
  for (let e of set2) {
    if (!set1.has(e)) {
      b.push(e);
    }
  }

  return [a, b];
};

//time complexity big O(n)
