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
 * @return {boolean}
 */
var isValidBST = function (root) {
    function isValid(root, min, max) {
        if (!root) return true
        if (!(root.val < max && root.val > min)) return false
        return isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
    }
    return isValid(root, -Infinity, Infinity)
};