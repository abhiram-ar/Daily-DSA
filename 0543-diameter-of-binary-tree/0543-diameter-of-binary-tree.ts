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

    let mx:[number] = [0]

    function dfs(node: TreeNode | null, mx: [number]): number {
        if (!node) return 0

        let lhmx = dfs(node.left, mx)
        let rhmx = dfs(node.right, mx)

        let currMax = lhmx + rhmx
        mx[0] = Math.max(mx[0], currMax)

        return 1 + Math.max(lhmx, rhmx)
    }

    dfs(root, mx)
    return mx[0]
};  