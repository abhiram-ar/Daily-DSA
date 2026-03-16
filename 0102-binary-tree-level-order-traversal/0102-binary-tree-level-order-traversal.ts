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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return []

    let q: TreeNode[] = []
    q.push(root)

    let ans: number[][] = []
    while (q.length > 0) {
        let levelSize = q.length
        let levelValues = []
        for (let i = 0; i < levelSize; i++) {
            let node = q.shift()
            levelValues.push(node.val)
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
        ans.push(levelValues)
    }

    return ans
};