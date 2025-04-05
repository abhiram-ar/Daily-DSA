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
var removeNthFromEnd = function (head, n) {
    // contains only one node, but n will atlest will be 1. So result will be empty
    if (!head.next) return null

    // logic: two pointers. Maintain the n distance b/w two pointers
    // delete the slow pointer node when fast pointer reach the end
    let l = head
    let r = head
    let diffCount = 0
    while (r.next) {
        if (diffCount >= n) {
            l = l.next
        }
        r = r.next
        diffCount++
    }

    // edge case: list=[1,2], n=2
    if (diffCount < n)
        return l.next

    l.next = l.next.next
    return head
};