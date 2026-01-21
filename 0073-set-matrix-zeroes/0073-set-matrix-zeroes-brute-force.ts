/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const zeroedRow = new Set()
    const zeroedCol = new Set()

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                zeroedRow.add(i)
                zeroedCol.add(j)
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (zeroedRow.has(i) || zeroedCol.has(j)) {
                matrix[i][j] = 0
            }
        }
    }
};