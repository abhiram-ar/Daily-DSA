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
var levelOrder = function (root) {
    let queue = []
    if (root) {
        queue.push(root)
    }
    let node
    let levelTemp
    let levelOrder = []
    while (queue.length) {
        levelTemp = []
        let size = queue.length
        for (let i = 0; i < size; i++) {
            node = queue.shift()
            levelTemp.push(node?.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        levelOrder.push(levelTemp)
    }
    return levelOrder
};