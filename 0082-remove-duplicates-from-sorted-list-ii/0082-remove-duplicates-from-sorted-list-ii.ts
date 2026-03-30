/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return head

    let dummyHead = new ListNode(0)
    let prev = dummyHead

    let curr = head
    let ahead
    while (curr) {
        let dup = false
        let ahead = curr.next
        while (curr.val === ahead?.val) {
            dup = true
            ahead = ahead.next
        }
        console.log('check', curr, ahead, dup)

        if (!dup) {
            prev.next = curr
            prev = curr
            curr = curr.next
        } else {
            curr = ahead
        }
    }

    prev.next = null

    return dummyHead.next
};