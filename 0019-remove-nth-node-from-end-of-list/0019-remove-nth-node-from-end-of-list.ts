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

    let slow = head
    let fast = head

    for (let i = 0; i < n; i++) {
        fast = fast.next
    }
    if(!fast) {
        let oldHead = head
        head = head.next
        oldHead.next = null
        return head
    }

    while(fast.next){
        slow = slow.next
        fast = fast.next
    }

    let nodeToDelete = slow.next
    slow.next = slow.next.next
    nodeToDelete.next = null
    return head

};