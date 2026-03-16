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

function rightSideView(root: TreeNode | null): number[] {
    if (!root) return []
    let q = [root]
    let ans: number[] = []
    while (q.length > 0) {
        let levelLength = q.length
        for (let i = 0; i < levelLength; i++) {
            let node = q.shift()
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            if (i === levelLength - 1) {
                ans.push(node.val)
            }
        }
    }
    return ans
};