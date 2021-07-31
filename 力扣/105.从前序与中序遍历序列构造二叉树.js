/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const help = (preStart, preEnd, inorderStart, inorderEnd) => {
    // 前序遍历数组已经使用完毕
    if (preStart > preEnd) return null;
    // 获取根节点的值
    let rootVal = preorder[preStart];
    // 构造根节点
    let root = new TreeNode(rootVal);
    // 获取根节点在中序遍历数组的索引
    let mid = map.get(rootVal);
    let leftNum = mid - inorderStart;
    root.left = help(preStart + 1, preStart + leftNum, inorderStart, mid - 1);
    root.right = help(preStart + leftNum + 1, preEnd, mid + 1, inorderEnd);
    return root;
  };
  return help(0, preorder.length - 1, 0, inorder.length - 1);
};
// @lc code=end
