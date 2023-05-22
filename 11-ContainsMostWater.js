var maxArea = function (height) {
  let firstPosition = 0;
  let lastPosition = height.length - 1;
  let NetWater = 0;
  while (firstPosition < lastPosition) {
    let apex = Math.min(height[firstPosition], height[lastPosition]);
    let width = lastPosition - firstPosition;

    let currentWater = apex * width;
    NetWater = Math.max(currentWater, NetWater);
    if (height[firstPosition] <= height[lastPosition]) {
      firstPosition++;
    } else {
      lastPosition--;
    }
  }

  return NetWater;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
