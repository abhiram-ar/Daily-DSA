/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    const oldToCopy = new Map()
    oldToCopy.set(null, null)

    let oldCurr = head

    while (oldCurr) {
        if (!oldToCopy.has(oldCurr)) {
            oldToCopy.set(oldCurr, new _Node(0))
        }
        oldToCopy.get(oldCurr).val = oldCurr.val

        if (!oldToCopy.has(oldCurr.next)) {
            oldToCopy.set(oldCurr.next, new _Node(0))
        }
        oldToCopy.get(oldCurr).next = oldToCopy.get(oldCurr.next)

        if (!oldToCopy.has(oldCurr.random)) {
            oldToCopy.set(oldCurr.random, new _Node(0))
        }
        oldToCopy.get(oldCurr).random = oldToCopy.get(oldCurr.random)

        oldCurr = oldCurr.next


    }
    return oldToCopy.get(head)
};