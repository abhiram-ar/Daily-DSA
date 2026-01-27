function generate(numRows: number): number[][] {
    const res = [[1]]
    for (let i = 1; i < numRows; i++) {
        const row = new Array(i + 1)
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row[j] = 1
            } else{
                row[j] = res[i-1][j-1] + res[i-1][j]
            }
        }
        res.push(row)
    }

    return res
};