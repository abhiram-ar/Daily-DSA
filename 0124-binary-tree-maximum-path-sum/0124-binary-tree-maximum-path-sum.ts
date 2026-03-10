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

        let ls = Math.max(0, dfsSum(node.left, mx)) // 0 => slip -ve sum
        let rs = Math.max(0, dfsSum(node.right, mx))

        let currSum = ls + rs + node.val
        mx[0] = Math.max(mx[0], currSum)

        return node.val + Math.max(ls, rs) 
    }

    dfsSum(root, mx)
    return mx[0]
};