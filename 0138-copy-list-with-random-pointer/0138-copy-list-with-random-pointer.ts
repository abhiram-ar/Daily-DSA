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
    const old2New = new Map<typeof head, typeof head>()
    let curr = head
    let newHead = new _Node(0)
    let prev = newHead
    while (curr) {
        const newNode = new _Node(curr.val)
        old2New.set(curr, newNode)
        prev.next = newNode
        prev = newNode

        curr = curr.next
    }

    curr = head
    while (curr) {
        const randCurr = curr.random
        const newCurr = old2New.get(curr) as _Node
        const randNew = old2New.get(randCurr) as _Node
        newCurr.random = randNew
        curr = curr.next
    }

    return newHead.next
};