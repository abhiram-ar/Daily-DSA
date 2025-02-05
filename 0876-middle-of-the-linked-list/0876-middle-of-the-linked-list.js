/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let size = 0
    let curr = head
    let slow = head
    while (curr) {
        size++
        curr = curr.next
        if (size % 2 == 0) {
            slow = slow.next
        }
    }
    return slow

};