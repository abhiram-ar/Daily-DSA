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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) return null
    let diff = 0
    let curr = head
    let prev = new ListNode()
    prev.next = head

    while (curr) {
        if (diff === n) prev = prev.next
        else diff++
        curr = curr.next
    }

    if(prev.next === head) return head.next

    let toDelete = prev.next
    prev.next = prev.next.next
    toDelete.next = null

    return head
};