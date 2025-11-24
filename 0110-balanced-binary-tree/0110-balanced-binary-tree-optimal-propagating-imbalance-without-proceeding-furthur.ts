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

function isBalanced(root: TreeNode | null): boolean {
    if (!root) return true

    function dfsHeight(node: TreeNode | null): number {
        if (!node) return 0
        let lh = dfsHeight(node.left)
        if (lh === -1) return -1
        let rh = dfsHeight(node.right)
        if (rh === -1) return -1
        if (Math.abs(lh - rh) > 1) return -1
        return Math.max(lh, rh) + 1
    }

    const res = dfsHeight(root)
    return res !== -1

};