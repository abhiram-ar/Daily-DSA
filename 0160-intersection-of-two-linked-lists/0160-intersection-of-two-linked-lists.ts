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
    if (!headA || !headB) return null

    let end
    let curr = headA
    while (curr.next) curr = curr.next

    end = curr
    end.next = headB

    let fast = headA
    let slow = headA
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) {
            slow = headA
            while (slow !== fast) {
                slow = slow.next
                fast = fast.next
            }

            end.next = null
            return fast
        }
    }

    end.next = null
    return null
};