function transpose(matrix: number[][]): number[][] {
    const m = matrix.length
    const n = matrix[0].length

    const res: number[][] = Array(n).fill(0).map(e => Array(m).fill(0))

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[j][i] = matrix[i][j]
        }
    }

    return res
};