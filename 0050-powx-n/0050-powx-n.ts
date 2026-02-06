function myPow(x: number, n: number): number {
    if (n < 0) {
        x = 1 / x
        n = -n
    }

    if (n === 0) return 1
    if (n === 1) return x
    if (n % 2 === 1) return x * myPow(x, n - 1)
    else return myPow(x * x, Math.floor(n / 2))
};