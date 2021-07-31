/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head === null) return null;

    let fast = head;
    let slow = head;
    let hasCycle = false;

    while(fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next;
      slow = slow.next;

      if(fast === slow){
        hasCycle = true;
        break;
      }
    }

    if(!hasCycle) return null;

    fast = head;
    while(fast !== slow){
      fast = fast.next;
      slow = slow.next;
    }

    return fast;
};
// @lc code=end

