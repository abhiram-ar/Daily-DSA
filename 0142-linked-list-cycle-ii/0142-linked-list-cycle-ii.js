/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    const visited = new Set
    let curr = head
    while (curr) {
        if (visited.has(curr)) {
            return curr
        }
        visited.add(curr)
        curr = curr.next
    }
    return null
};