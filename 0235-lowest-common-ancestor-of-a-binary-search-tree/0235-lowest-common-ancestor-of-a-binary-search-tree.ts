/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let curr = root
    while(curr){
        if(curr.val > p.val && curr.val > q.val){
            curr = curr.left
        } else if(curr.val < p.val && curr.val < q.val) {
            curr = curr.right
        } else {
            // split has occured
            return curr
        }
    }
};