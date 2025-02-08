/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1) return x
    let l = 1, r = x / 2, mid, ans, sq
    while (l <= r) {
        mid = Math.floor((l + r) / 2)
        sq = mid * mid
        if (sq === x) return mid
        if (sq < x) {
            ans = mid
            l = mid + 1
        }
        else r = mid - 1
    }
    return ans
};