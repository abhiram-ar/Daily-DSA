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

    function dfsHeight(root: TreeNode | null): number {
        if (!root) return 0

        let lh = dfsHeight(root.left)
        if (lh === -1) return -1 // propagate -1

        let rh = dfsHeight(root.right)
        if (rh === -1) return -1 // propagate -1

        if (Math.abs(lh - rh) > 1) return -1 // start progatate fase
        return 1 + Math.max(lh, rh)
    }

    return dfsHeight(root) !== -1
};