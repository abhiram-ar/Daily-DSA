/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let slow = head
    let fast = head.next
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    // reverssing link of second half
    prev = null
    curr = slow.next
    slow.next = null
    while (curr) {
        let actualNext = curr.next
        curr.next = prev

        prev = curr
        curr = actualNext
    }

    // mergin two portions
    let first = head
    let second = prev
    while (second) {
        let fNext = first.next
        let sNext = second.next

        first.next = second
        second.next = fNext

        second = sNext
        first = fNext
    }


    return head

};