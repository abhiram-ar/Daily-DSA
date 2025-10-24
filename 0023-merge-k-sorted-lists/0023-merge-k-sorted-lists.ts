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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let ptrArr = []
    for (let node of lists) ptrArr.push(node)
    let resHead = null
    let resTail = null

    while (true) {
        let min = new ListNode(Infinity)
        let minIdx = -1
        for (let i = 0; i < ptrArr.length; i++) {
            if (ptrArr[i]) {
                if (ptrArr[i]?.val < min.val) {
                    min = ptrArr[i]
                    minIdx = i
                }
            }
        }

        if ( minIdx !== -1) {
            let node = min
            ptrArr[minIdx] = ptrArr[minIdx]?.next
            if (!resHead) {
                resHead = node
            }
            if (resTail) {
                resTail.next = node
            }
            resTail = node
            node.next = null
        }
        else {
            break
        }
    }

    return resHead
};