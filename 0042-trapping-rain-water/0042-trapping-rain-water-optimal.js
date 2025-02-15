/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let lmax, rmax, total = 0
    let l = 0
    let r = height.length - 1

    while (l < r) {
        if (height[l] <= height[r]) {
            if (lmax > height[l]) {
                total += lmax - height[l]
            } else {
                lmax = height[l]
            }
            l++
        } else {
            if (rmax > height[r]) {
                total += rmax - height[r]
            } else {
                rmax = height[r]
            }
            r--
        }
    }
    return total
};