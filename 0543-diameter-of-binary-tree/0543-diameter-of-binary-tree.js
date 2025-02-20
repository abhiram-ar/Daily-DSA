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
var diameterOfBinaryTree = function (root) {
    let max = [0] // pass by reference
    function height(root) {
        if (!root) return 0
        let lh = height(root.left, max)
        let rh = height(root.right, max)
        max[0] = Math.max(lh + rh, max[0])
        return Math.max(rh, lh) + 1
    }
    height(root, max)
    return max[0]


};
