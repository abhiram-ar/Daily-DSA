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

function maxPathSum(root: TreeNode | null): number {
    if (!root) return 0

    let mx: [number] = [-Infinity]

    function dfsSum(node: TreeNode | null, mx: [number]): number {
        if (!node) return 0

        let ls = dfsSum(node.left, mx)
        let rs = dfsSum(node.right, mx)

        let currSum = ls + rs + node.val
        mx[0] = Math.max(mx[0], currSum)

        return Math.max(node.val + ls, node.val + rs, node.val, 0)  // 0 => slip -ve sum
    }

    dfsSum(root, mx)
    return mx[0]
};