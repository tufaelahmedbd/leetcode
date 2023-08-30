var kidsWithCandies = function (candies, extraCandies) {
  let res = [];
  let m = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    candies[i] + extraCandies >= m ? res.push(true) : res.push(false);
  }

  return res;
};
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
