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
    let fast = head
    for(let i=0;i<n;i++) fast = fast.next

    // fast === null => n === sz => delete first node
    if(!fast) return head.next

    let slow = head
    while(fast.next){
        slow = slow.next
        fast = fast.next
    }

    const toDel = slow.next
    slow.next = slow.next.next
    toDel.next = null

    return head
};