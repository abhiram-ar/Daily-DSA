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
    let carry = 0
    let p1 = l1
    let p2 = l2
    let sum = 0
    let halfAdd = 0

    let res = new ListNode()
    let resPrev = res
    while (p1 || p2 || carry) {
        sum = (p1?.val ?? 0) + (p2?.val ?? 0) + carry

        halfAdd = sum
        if (sum >= 10) {
            carry = 1
            halfAdd = sum - 10
        } else {
            carry = 0
        }

        let newNode = new ListNode(halfAdd)
        resPrev.next = newNode
        resPrev = newNode

        if (p1) p1 = p1.next
        if (p2) p2 = p2.next
    }
    return res.next
};