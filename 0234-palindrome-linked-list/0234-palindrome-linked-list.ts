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

function isPalindrome(head: ListNode | null): boolean {
    if (!head.next) return true
    let slow = head
    let fast = head
    let prev = null
    let curr

    while (fast && fast.next) {
        let curr = slow
        slow = slow.next
        fast = fast.next.next

        curr.next = prev
        prev = curr
    }

    // odd length list
    if (fast) {
        slow = slow.next
    }

    while (slow) {
        if (slow.val !== prev.val) return false
        slow = slow.next
        prev = prev.next
    }

    return true

};