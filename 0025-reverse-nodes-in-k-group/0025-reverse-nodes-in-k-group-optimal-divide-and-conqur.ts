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
        let nextGroupStart = kthNode.next
        kthNode.next = null
        reverseLL(groupStart)
        if (groupStart === head) {
            head = kthNode
        } else {
            prevGroupEnd.next = kthNode
        }
        prevGroupEnd = groupStart
        groupStart = nextGroupStart
    }
    return head


    function findKth(node: ListNode, k: number): ListNode | null {
        k--
        while (node && k > 0) {
            k--
            node = node.next
        }
        return node
    }

    function reverseLL(head: ListNode): ListNode {
        let curr = head
        let prev = null
        while (curr) {
            let nextNode = curr.next
            curr.next = prev
            prev = curr
            curr = nextNode
        }
        head = prev
        return head
    }
};