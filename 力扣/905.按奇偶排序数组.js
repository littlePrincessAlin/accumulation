/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] % 2 !== 0 && nums[j] % 2 === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    if (nums[j] % 2 !== 0) {
      j--;
    }
    if (nums[i] % 2 === 0) {
      i++;
    }
  }
  return nums;
};
// @lc code=end
