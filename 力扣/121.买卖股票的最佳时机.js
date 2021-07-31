/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let j = 1;

  for (let i = 0; i < prices.length; i++) {
    while (prices[i] <= prices[j]) {
      const cur = prices[j] - prices[i];
      max = Math.max(max, cur);
      j++;
    }
  }

  return max;
};
// @lc code=end
