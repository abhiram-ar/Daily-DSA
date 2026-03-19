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

        const subTreeRoot = new TreeNode(preorder[preStart])
        const subTreeRootInOrderIdx = inOrderIdxHash.get(subTreeRoot.val) as number
        const numsLeftInOrder = subTreeRootInOrderIdx - inStart

        subTreeRoot.left = build(preStart + 1, preStart + numsLeftInOrder, inStart, subTreeRootInOrderIdx - 1)
        subTreeRoot.right = build(preStart + numsLeftInOrder + 1, preEnd, subTreeRootInOrderIdx + 1, inEnd)

        return subTreeRoot
    }
};