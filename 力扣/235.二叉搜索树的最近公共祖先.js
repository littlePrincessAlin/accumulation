/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const search = (root, p, q) => {
    if (!root || p===root || q===root) return root;
    
    if(p.val < root.val && q.val < root.val){
      return search(root.left, p, q)
    }else if(p.val > root.val && q.val > root.val){
      return search(root.right, p, q)
    }else {
      return root;
    }
  };

  return search(root, p, q);
};
// @lc code=end
