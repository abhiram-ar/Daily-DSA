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

    function dfsHas(root: TreeNode | null, key: TreeNode): { found: boolean, node?: TreeNode | null } {
        if (!root) return { found: false }

        if (root.val === key.val) return { found: true, node: root }

        let lr = dfsHas(root.left, key)
        if (lr.found) return lr

        let rr = dfsHas(root.right, key)
        if (rr.found) return rr

        return { found: false }
    }

    function dfs(node: TreeNode | null): TreeNode | null {
        if (!node) return null

        let lres = dfs(node.right)
        if (lres) return lres

        let rres = dfs(node.left)
        if (rres) return rres

        let fp = dfsHas(node, p)
        let fq = dfsHas(node, q)

        if (fp.found && fq.found) return node

        return null

    }

    return dfs(root)


};