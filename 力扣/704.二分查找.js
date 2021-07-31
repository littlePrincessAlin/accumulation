/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let cur = Math.floor(left + (right - left) / 2);

    if (nums[cur] === target) {
      return cur;
    } else if (target < nums[cur]) {
      right = cur - 1;
    } else if (target > nums[cur]) {
      left = cur + 1;
    }
  }
  return -1;
};
// @lc code=end
