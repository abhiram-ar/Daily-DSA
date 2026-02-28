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
    const st = []

    while (fast && fast.next) {
        st.push(slow.val)
        slow = slow.next
        fast = fast.next.next
    }

    // even length list
    if (fast) {
        slow = slow.next
    }

    while (slow) {
        if (st.at(-1) === slow.val) st.pop()
        else return false
        slow = slow.next
    }

    return st.length === 0


};