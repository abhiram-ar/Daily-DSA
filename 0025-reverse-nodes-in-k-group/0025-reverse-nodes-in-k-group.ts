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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let groupStart = head
    let prevGroupEnd = null

    while (groupStart) {
        let kthNode = findKth(groupStart, k)
        if (!kthNode) {
            if (prevGroupEnd) prevGroupEnd.next = groupStart
            break
        }

        let nextNode = kthNode.next
        kthNode.next = null

        reverse(groupStart)

        if (groupStart === head) {
            head = kthNode
        } else {
            prevGroupEnd.next = kthNode
        }

        prevGroupEnd = groupStart
        groupStart = nextNode
    }

    return head

    function findKth(node: ListNode, k: number): ListNode | null {
        k--
        while (node && k > 0) {
            node = node.next
            k--
        }
        return node
    }

    function reverse(head: ListNode) {
        let curr = head
        let prev = null
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        return prev
    }
};