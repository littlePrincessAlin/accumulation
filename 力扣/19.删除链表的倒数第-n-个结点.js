/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dunmmy = new ListNode();
  dunmmy.next = head;
  let current = dunmmy;
  let fast = head;

  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }

  while (fast!==null){
    current = current.next;
    fast = fast.next;
  }

  current.next = current.next.next;

  return dunmmy.next;
};
// @lc code=end

