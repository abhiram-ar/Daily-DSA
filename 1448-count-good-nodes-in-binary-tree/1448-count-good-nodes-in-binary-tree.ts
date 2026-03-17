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

function goodNodes(root: TreeNode | null): number {
    let count = 0
    function dfs(node: TreeNode | null, max: number){
        if(!node) return
        if(max <= node.val) count++
        max = Math.max(max, node.val)
        dfs(node.left, max)
        dfs(node.right, max)
    }
    dfs(root, -Infinity)
    return count
};