/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const concatArrays = nums1.concat(nums2);

  concatArrays.sort((a, b) => {
    return a - b;
  });

  if (concatArrays.length % 2 == 0) {
    return (concatArrays[concatArrays.length / 2] + concatArrays[concatArrays.length / 2 - 1]) / 2;
  } else {
    return concatArrays[(concatArrays.length - 1) / 2];
  }
};
// @lc code=end
