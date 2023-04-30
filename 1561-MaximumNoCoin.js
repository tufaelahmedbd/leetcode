/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  piles = piles.sort(function (a, b) {
    return a - b;
  });
  let numOfCoin = 0;
  let numberOfPilesLeft = piles.length / 3;
  let i = numberOfPilesLeft;
  while (numberOfPilesLeft-- > 0) {
    numOfCoin += piles[i];
    i += 2;
  }
  return numOfCoin;
};
