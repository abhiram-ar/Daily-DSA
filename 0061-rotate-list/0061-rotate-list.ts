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

function findKthNode(node, k) {
    let cnt = 1
    while (node) {
        if (cnt === k) return node
        node = node.next
        cnt++
    }
    return node
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) return null
    let curr = head
    let size = 1

    while (curr.next) {
        curr = curr.next
        size++
    }

    let effRotation = k % size
    if (effRotation === 0) return head

    let newLastNode = findKthNode(head, size - effRotation)

    curr.next = head
    head = newLastNode.next
    newLastNode.next = null

    return head
};