/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let getRes = (root, key, arr) => {
    if (!root) return null;
    if (key === arr.length) arr.push([]);
    arr[key].push(root.val);
    getRes(root.left, key + 1, arr);
    getRes(root.right, key + 1, arr);
  };
  let arr = [];
  getRes(root, 0, arr);
  return arr;
};
// @lc code=end
