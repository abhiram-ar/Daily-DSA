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

function diameterOfBinaryTree(root: TreeNode | null): number {
    if(!root) return 0
    let mx = 0
    function dfs(node: TreeNode | null): number {
        if (!node) return 0

        let lhmx = dfs(node.left)
        let rhmx = dfs(node.right)

        let currMax = lhmx + rhmx
        mx = Math.max(mx, currMax)

        return 1 + Math.max(lhmx, rhmx) 
    }

    dfs(root)
    return mx 
};  