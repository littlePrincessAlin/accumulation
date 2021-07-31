/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function(root) {
    let search = (root, key, arr) => {
      if(root === null) return null;
      if(key === arr.length) arr.push([]);
      arr[key].push(root.val);
      search(root.left, key+1, arr);
      search(root.right, key+1, arr)
    }
  
    let arr = [];
    search(root, 0 , arr);
    
    for(let i = 1; i < arr.length; i+=2){
      arr[i]=arr[i].reverse()
    }

    return arr;
};
// @lc code=end

