/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 贪心算法
  let max = 0;
  if (!prices.length) return max;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] - prices[i] > 0) {
      max += prices[i + 1] - prices[i];
    }
  }
  return max;
};
// @lc code=end
