/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let pre = null;
  let current = head;
  let next = head;
  for (let i = 1; i < left; i++) {
    pre = current;
    current = current.next;
  }
  let prev2 = pre;
  let cur2 = current;
  for (let i = left; i <= right; i++) {
    next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  if (prev2 !== null) {
    prev2.next = pre;
  } else {
    head = pre;
  }
  cur2.next = current;
  return head;
};
// @lc code=end
