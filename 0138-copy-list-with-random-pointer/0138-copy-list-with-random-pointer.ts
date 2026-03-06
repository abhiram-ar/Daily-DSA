/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    // inset new node in between old nodes
    let curr = head
    while (curr) {
        const newCopy = new _Node(curr.val)
        newCopy.next = curr.next

        curr.next = newCopy
        curr = curr.next.next
    }

    // connect random pointer
    curr = head
    while (curr) {
        let copyNode = curr.next
        copyNode.random = curr.random?.next // could be null

        curr = curr.next.next
    }

    const newDummy = new _Node(0)
    let newPrev = newDummy
    let oldCurr = head

    while (oldCurr) {
        newPrev.next = oldCurr.next

        newPrev = oldCurr.next
        oldCurr.next = oldCurr.next.next
        oldCurr = oldCurr.next
    }

    return newDummy.next
};