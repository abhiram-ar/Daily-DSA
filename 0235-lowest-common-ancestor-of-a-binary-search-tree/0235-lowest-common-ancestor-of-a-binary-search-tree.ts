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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {

    function dfsHas(root: TreeNode | null, key: TreeNode): boolean {
        if (!root) return false

        if (root.val === key.val) return true
        else if (root.val > key.val) {
            let lr = dfsHas(root.left, key)
            return lr
        } else {
            let rr = dfsHas(root.right, key)
            return rr
        }

        return false
    }

    function dfs(node: TreeNode | null): TreeNode | null {
        if (!node) return null

        let lres = dfs(node.right)
        if (lres) return lres

        let rres = dfs(node.left)
        if (rres) return rres

        let fp = dfsHas(node, p)
        let fq = dfsHas(node, q)

        if (fp && fq) return node

        return null

    }

    return dfs(root)


};