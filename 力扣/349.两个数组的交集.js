/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let set=new Set();
  let setNum2=new Set(nums2);
  for(let i=0;i<nums1.length;i++){
  
  if(setNum2.has(nums1[i])){
  
      set.add(nums1[i])
  }
  }
  return Array.from(set)
};
// @lc code=end

