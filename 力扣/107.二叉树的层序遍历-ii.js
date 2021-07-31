/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
var levelOrderBottom = function (root) {
  let search = (root, key, arr) => {
    if(root === null) return null;
    if(key === arr.length) arr.push([]);
    arr[key].push(root.val);
    search(root.left, key+1, arr);
    search(root.right, key+1, arr)
  }

  let arr = [];
  search(root, 0 , arr);
  return arr.reverse();
};
// @lc code=end
