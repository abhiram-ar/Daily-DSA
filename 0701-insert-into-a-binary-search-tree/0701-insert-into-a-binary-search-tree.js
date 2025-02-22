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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (!root) return root = new TreeNode(val)
    if (val < root.val) {
        if (!root.left) {
            root.left = new TreeNode(val)
        } else {
            insertIntoBST(root.left, val)
        }
    }else{
        if(!root.right){
            root.right = new TreeNode(val)
        }else{
            insertIntoBST(root.right, val)
        }
    }
    return root
};