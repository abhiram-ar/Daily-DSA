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

function rightSideView(root: TreeNode | null): number[] {
    let ans = []
    function reversePostOrder(node, level) {
        if(!node) return

        // first element added in a level 
        if(ans.length === level) ans.push(node.val)

        // first to to the right in reveser post post order
        if(node.right) reversePostOrder(node.right, level+1) 
        if(node.left) reversePostOrder(node.left, level+1) 
    }
    reversePostOrder(root, 0)
    return ans
};