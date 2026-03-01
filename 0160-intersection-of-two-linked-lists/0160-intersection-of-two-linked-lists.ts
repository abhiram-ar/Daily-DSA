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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headB || !headA) return null

    const hash = new Set()
    let curr = headA
    while (curr) {
        hash.add(curr)
        curr = curr.next
    }
    curr = headB
    while (curr) {
        if (hash.has(curr)) return curr
        curr = curr.next
    }
    return null
};