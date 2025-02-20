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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return []

    let level = 0
    let ans = []
    let queue = [root]
    let node
    let size
    while (queue.length > 0) {
        size = queue.length
        level = []
        for (let i = 0; i < size; i++) {
            node = queue.shift()
            if (ans.length % 2 === 0) {
                level.unshift(node.val)
            } else {
                level.push(node.val)
            }
            if (node.right) queue.push(node.right)
            if (node.left) queue.push(node.left)
        }
        ans.push(level)
    }
    return ans
};