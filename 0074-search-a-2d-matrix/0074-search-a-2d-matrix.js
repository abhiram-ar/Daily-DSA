/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let m = matrix.length
    let n = matrix[0].length

    let ol = 0
    let or = m - 1
    while (ol <= or) {
        let omid = Math.floor((ol + or) / 2)
        if (target >= matrix[omid][0] && target <= matrix[omid][n - 1]) {
            // do bin search here
            let l = 0
            let r = n - 1
            while (l <= r) {
                let mid = Math.floor((l + r) / 2)
                if (matrix[omid][mid] === target) return true

                if (target < matrix[omid][mid]) r = mid - 1;
                else l = mid + 1;
            }
            return false
        } else {
            if (target < matrix[omid][0]) or = omid - 1
            else if (target > matrix[omid][n - 1]) ol = omid + 1
        }
    }
    return false

};