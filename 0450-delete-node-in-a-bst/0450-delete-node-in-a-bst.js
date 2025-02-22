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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) return root
    if (root.val === key) {
        return remove(root)

    }

    let node = root
    while (node != null) {
        if (key < node.val) {
            if (node.left && node.left.val === key) {
                node.left = remove(node.left)
                break
            } else {
                node = node.left
            }
        } else {
            if (node.right && node.right.val === key) {
                node.right = remove(node.right)
                break
            } else {
                node = node.right
            }
        }
    }
    return root
};

function remove(node) {
    if (!node.left && !node.right) return null
    if (!node.left) {
        return node.right
    } else if (!node.right) {
        return node.left
    }
    let rightChildOfRemovedNode = node.right
    node.right = null

    let prev = node.left
    while (true) {
        if (prev.right) {
            prev = prev.right
        } else {
            break
        }
    }
    prev.right = rightChildOfRemovedNode
    return node.left
}