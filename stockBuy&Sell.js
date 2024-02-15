// url: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// Input: prices = [7,1,5,3,6,4]
// Output: 5

var maxProfit = function(prices) {
  let left = 0;
  let right = 1;
  let totalProfit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      totalProfit = Math.max(totalProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return totalProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))