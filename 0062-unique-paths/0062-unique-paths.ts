

function uniquePaths(m: number, n: number): number {
    if (m === 1 || n === 1) return 1


    let matrix = Array(m)
    for (let i = 0; i < m; i++) {
        matrix[i] = Array(n)
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i === m - 1 || j === n - 1) matrix[i][j] = 1
            else matrix[i][j] = matrix[i + 1][j] + matrix[i][j + 1]
        }
    }

    return matrix[0][0]



};