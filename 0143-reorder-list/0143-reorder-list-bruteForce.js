/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let curr = head
    let dequeue = []
    while (curr) {
        dequeue.push(curr)
        curr = curr.next
    }
    let last = head
    while (dequeue.length > 0) {
        let left = dequeue.shift()
        let right = dequeue.pop()

        last.next = left
        if (right) {
            left.next = right
            last = right
        } else {
            last = left
        }

    }
    last.next = null

    return head
};
