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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let arr = []
    function inorder(root, arr) {
        if (!root) return []
        inorder(root.left, arr)
        arr.push(root.val)
        inorder(root.right, arr)
        return arr
    }
    return inorder(root, arr)
};