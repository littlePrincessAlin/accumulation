/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
  const dfs = (root) => {
    if (!root) return 0;
    return 1 + Math.max(dfs(root.left), dfs(root.right));
  };
  if (Math.abs(dfs(root.left) - dfs(root.right)) > 1) {
    return false;
  } else {
    if (isBalanced(root.left) && isBalanced(root.right)) {
      return true;
    } else {
      return false;
    }
  }
};
// @lc code=end
