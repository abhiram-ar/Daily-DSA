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
var postorderTraversal = function(root) {
    let ans = []
    function postOrder(root, ans){
        if(!root) return
        postOrder(root.left, ans)
        postOrder(root.right, ans)
        ans.push(root.val)
    }
    postOrder(root, ans)
    return ans
};