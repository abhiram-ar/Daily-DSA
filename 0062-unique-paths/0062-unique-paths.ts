function uniquePaths(m: number, n: number): number {
    if (m === 1 || n === 1) return 1


    let matrix = Array(m)
    for (let i = 0; i < m; i++) {
        matrix[i] = Array(n)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) matrix[i][j] = 1
            else matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
        }
    }

    return matrix[m-1][n-1]



};