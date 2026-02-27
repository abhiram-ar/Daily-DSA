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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 && !list2) return null
    if (!list1) return list2
    if (!list2) return list1

    let merge: ListNode | null = null
    
    let head = list1.val <= list2.val ? list1 : list2
    let curr1 = list1
    let curr2 = list2
    while (curr1 && curr2) {
        if (curr1.val <= curr2.val) {
            if (merge) merge.next = curr1
            merge = curr1
            curr1 = curr1.next
        } else {
            if(merge) merge.next = curr2
            merge = curr2
            curr2 = curr2.next
        }
    }
    if(curr1) {
        merge.next = curr1
    }
    if(curr2){
        merge.next = curr2
    }
    return head
};