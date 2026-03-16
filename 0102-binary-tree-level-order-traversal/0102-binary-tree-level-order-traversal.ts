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
    if(!root) return []
    
    let q: [TreeNode, number][] = []
    q.push([root, 0])

    let ans:number[][] = []
    while (q.length > 0) {
        let [node, level] = q.shift()
        if (node.left) q.push([node.left, level + 1])
        if (node.right) q.push([node.right, level + 1])

        if(ans[level] === undefined) ans[level] = []
        ans[level].push(node.val)
    }

    return ans
};