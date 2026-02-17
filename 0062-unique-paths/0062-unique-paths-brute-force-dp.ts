

function uniquePaths(m: number, n: number): number {
    if (m === 1 || n === 1) return 1


    let matrix = Array(m)
    for (let i = 0; i < m; i++) {
        matrix[i] = Array(n).fill(1)
    }

    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            matrix[i][j] = matrix[i + 1][j] + matrix[i][j + 1]
        }
    }

    return matrix[0][0]



};