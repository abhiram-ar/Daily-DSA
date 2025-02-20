/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    let max = [-Infinity]
    function dfs(root) {
        if (!root) return 0
        let ls = Math.max(0, dfs(root.left))
        let rs = Math.max(0, dfs(root.right))
        max[0] = Math.max(ls + rs + root.val, max[0])
        return Math.max(ls, rs) + root.val
    }
    dfs(root)
    return max[0]
};