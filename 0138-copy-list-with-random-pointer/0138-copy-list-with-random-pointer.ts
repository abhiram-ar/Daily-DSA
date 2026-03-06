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
    const old2New = new Map<_Node, _Node>()
    old2New.set(null, null)
    let oldCurr = head

    while (oldCurr) {
        if (!old2New.has(oldCurr)) old2New.set(oldCurr, new _Node(0))
        const newNode = old2New.get(oldCurr)
        newNode.val = oldCurr.val

        if (!old2New.has(oldCurr.next)) old2New.set(oldCurr.next, new _Node(0))
        newNode.next = old2New.get(oldCurr.next)

        if (!old2New.has(oldCurr.random)) old2New.set(oldCurr.random, new _Node(0))
        newNode.random = old2New.get(oldCurr.random)

        oldCurr = oldCurr.next
    }

    return old2New.get(head)
};