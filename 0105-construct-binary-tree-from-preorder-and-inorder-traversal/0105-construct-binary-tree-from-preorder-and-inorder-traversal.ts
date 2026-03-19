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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const inOrderIdxHash = new Map<number, number>()
    for (let i = 0; i < preorder.length; i++) {
        inOrderIdxHash.set(inorder[i], i)
    }

    const head = build(0, preorder.length -1, 0, inorder.length -1)
    return head


    function build(preStart, preEnd, inStart, inEnd): TreeNode | null {
        if(preStart > preEnd || inStart > inEnd) return null

        const root = new TreeNode(preorder[preStart])
        const rootInOrderIdx = inOrderIdxHash.get(root.val) as number
        const numsLeftInOrder = rootInOrderIdx - inStart

        root.left = build(preStart + 1, preStart + numsLeftInOrder, inStart, rootInOrderIdx - 1)
        root.right = build(preStart + numsLeftInOrder + 1, preEnd, rootInOrderIdx + 1, inEnd)

        return root
    }
};