var fairCandySwap = function (aliceSizes, bobSizes) {
  let aliceSum = aliceSizes.reduce((a, b) => a + b, 0);
  let bobSum = bobSizes.reduce((a, b) => a + b, 0);
  for (let i = 0; i < aliceSizes.length; i++) {
    for (let j = 0; j < bobSizes.length; j++) {
      let aliceCndy = aliceSizes[i];
      let bobCndy = bobSizes[j];

      let aliceSumAfterSwap = aliceSum - aliceCndy + bobCndy;
      let bobSumAfterSwap = bobSum - bobCndy + aliceCndy;
      if (aliceSumAfterSwap === bobSumAfterSwap) {
        return [aliceCndy, bobCndy];
      }
    }
  }
  return [];
};
console.log(fairCandySwap([1, 1], [2, 2]));
console.log(fairCandySwap([2], [1, 3]));
