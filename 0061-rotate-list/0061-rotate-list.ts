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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) return null
    if (k === 0) return head

    let size = 0
    let curr = head
    let prev = null

    while (curr) {
        size++
        prev = curr
        curr = curr.next
    }

    let effectiveRotation = (k % size)
    if (effectiveRotation === 0) return head

    // finding kth element
    let slow = head
    let fast = head

    for (let i = 0; i < effectiveRotation; i++) {
        fast = fast.next
    }

    while(fast.next){
        fast = fast.next
        slow = slow.next
    }

    fast.next = head
    head = slow.next
    slow.next = null

    return head

};