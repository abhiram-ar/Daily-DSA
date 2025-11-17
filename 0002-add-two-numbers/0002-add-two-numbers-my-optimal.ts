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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let intermediarySum = 0
    let halfAdd = 0
    let carry = 0
    let head = new ListNode()
    let prev = head
    while (l1 || l2 || carry) {
        intermediarySum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry
        halfAdd = intermediarySum % 10
        carry = Math.floor(intermediarySum / 10)

        let curr = new ListNode(halfAdd)
        prev.next = curr
        prev = curr

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    return head.next
};