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

    // postorder DFS
    function dfs(node: TreeNode | null): [number, number, boolean] {
        if (!node) return [Infinity, -Infinity, true]
        let lres = dfs(node.left)
        let rres = dfs(node.right)

        let isValid = true
        if (lres[1] >= node.val) isValid = false
        if (rres[0] <= node.val) isValid = false
        if (lres[2] === false || rres[2] === false) isValid = false

        let min = Math.min(node.val, lres[0], rres[0])
        let max = Math.max(node.val, lres[1], rres[1])

        return [min, max, isValid]
    }

    let res = dfs(root)
    return res[2]
};