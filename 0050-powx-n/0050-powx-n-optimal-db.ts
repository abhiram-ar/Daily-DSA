function myPow(x: number, n: number): number {
    let nn = n
    let ans = 1

    if (nn < 0) nn = -nn

    while (nn>0) {
        if (nn % 2 === 1) {
            ans = ans * x
            nn = nn - 1
        } else {
            x = x * x
            nn = Math.floor(nn / 2)
        }
    }

    if (n < 0) return 1 / ans

    return ans
};