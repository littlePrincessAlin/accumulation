/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  const getTargetName = (root, targetSum) => {
    if (!root) return false;

    if (!root.left && !root.right) return targetSum === root.val;

    targetSum = targetSum - root.val;
    return getTargetName(root.left, targetSum) || getTargetName(root.right, targetSum);
  };

  return getTargetName(root, targetSum);
};
// @lc code=end
