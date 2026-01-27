/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let m = matrix.length
    let n = matrix[0].length

    let isFirstRowZero = false
    let isFirstColZero = false

    // check if any zeros in first row
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            isFirstRowZero = true
            break
        }
    }

    // check if any zeos in first col
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            isFirstColZero = true
            break
        }
    }

    // pass the rest of the matrix to find zeros 
    // and use first row and col to track zeroed row and col
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0
                matrix[i][0] = 0
            }
        }
    }

    // second pass to mark the call as zero if the row or col is zeros
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0
            }
        }
    }

    // if the first row was suppose to be zeroed
    if (isFirstRowZero) {
        for (let j = 0; j < n; j++) matrix[0][j] = 0
    }

    // if the first column was suppose to be zeroed
    if (isFirstColZero) {
        for (let i = 0; i < m; i++) matrix[i][0] = 0
    }
};