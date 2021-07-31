/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  const search = (p, q) => {
    if (p === null && q === null) return true;
    if (p !== null && q === null) return false;
    if (p === null && q !== null) return false;

    return p.val === q.val && search(p.left, q.right) && search(p.right, q.left);
  };

  return search(root.left, root.right);
};
// @lc code=end
