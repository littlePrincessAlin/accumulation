/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let n1 = headA;
  let n2 = headB;

  while (n1 !== n2) {
    if (n1 !== null) {
      n1 = n1.next;
    } else {
      n1 = headB;
    }
    if (n2 !== null) {
      n2 = n2.next;
    } else {
      n2 = headA;
    }
  }

  return n1;
};
// @lc code=end
