function uniquePaths(m: number, n: number): number {
    if (m === 1 || n === 1) return 1


    let dp = Array(n).fill(0)
    let temp = Array(n).fill(0)
    let swap

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) temp[j] = 1
            else temp[j] = dp[j] + (temp[j - 1] || 0)
        }
        swap = dp
        dp = temp
        temp = swap
    }

    return dp[n - 1]



};