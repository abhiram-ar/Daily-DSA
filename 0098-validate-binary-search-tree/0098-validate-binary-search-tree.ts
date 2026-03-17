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

function isValidBST(root: TreeNode | null): boolean {
    function isValid(node: TreeNode | null, min: number, max: number): boolean {
        if (!node) return true
        if (!(node.val < max && node.val > min)) return false

        return isValid(node.left, min, node.val) &&
            isValid(node.right, node.val, max)
    }
    return isValid(root, -Infinity, Infinity)
};