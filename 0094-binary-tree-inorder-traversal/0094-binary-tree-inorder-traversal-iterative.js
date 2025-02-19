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
    if (!root) return []
    const st = []
    const ans = []
    let node = root
    while (true) {
        if (node) {
            st.push(node)
            node = node.left
        } else {
            if(st.length === 0) break
            node = st.pop()
            ans.push(node.val)
            node = node.right
        }
    }
    return ans

};