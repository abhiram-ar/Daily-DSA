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

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head) return head



    let evenH = null
    let even = null

    let oddH = null
    let odd = null

    let curr = head
    let pos = 1
    while (curr) {
        if (pos % 2 === 0) {
            if (!evenH) {
                evenH = curr
                even = curr
            } else {
                even.next = curr
                even = curr
            }
        } else {
            if (!oddH) {
                oddH = curr
                odd = curr
            } else {
                odd.next = curr
                odd = curr
            }
        }
        curr = curr.next
        pos++
    }


    odd.next = evenH
    if (even?.next) {
        even.next = null
    }
    return oddH

};