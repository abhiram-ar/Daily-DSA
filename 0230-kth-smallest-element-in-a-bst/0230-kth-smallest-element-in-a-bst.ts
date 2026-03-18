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

function kthSmallest(root: TreeNode | null, k: number): number {
    let iter = 0
    let ans = null
    function dfs(node: TreeNode | null): boolean {
        if(!node) return false
        
        let lres = dfs(node.left)
        if (lres) return true

        iter++
        if (iter === k) {
            ans = node.val
            return true
        }

        let rres = dfs(node.right)
        if (rres) return true
        return false
    }
    dfs(root) 
    return ans
};