var intersection = function (nums1, nums2) {
  const setNum1 = new Set(nums1);

  return [...new Set(nums2.filter((num) => setNum1.has(num)))];
};
