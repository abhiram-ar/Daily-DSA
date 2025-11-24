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
    if (!root) return 0
    let max: [number] = [0]// pass by reference
    function height(root: TreeNode | null, max: [number]): number {
        if (!root) return 0
        const lh = height(root.left, max)
        const rh = height(root.right, max)
        let currDiameter = lh + rh
        if (currDiameter > max[0]) {
            max[0] = currDiameter
        }
        return 1 + Math.max(lh, rh)
    }
    height(root, max)
    return max[0]
};