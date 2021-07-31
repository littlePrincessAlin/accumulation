/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) {
    return n;
  }

  let res1 = 0;
  let res2 = 1;
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    sum = res1 + res2;
    res1 = res2;
    res2 = sum;
  }
  return sum;
};
// @lc code=end
