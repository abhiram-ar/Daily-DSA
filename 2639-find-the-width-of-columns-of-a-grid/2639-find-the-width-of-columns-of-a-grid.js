/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {
    const m = grid.length
    const n = grid[0].length

    const ans = Array(n).fill(0)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ans[j] = Math.max(ans[j], String(grid[i][j]).length)
        }
    }

    return ans

};