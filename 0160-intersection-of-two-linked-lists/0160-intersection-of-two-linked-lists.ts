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
    let pA = headA;
    let pB = headB;

    while(pA != pB){
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }

    return pA
};