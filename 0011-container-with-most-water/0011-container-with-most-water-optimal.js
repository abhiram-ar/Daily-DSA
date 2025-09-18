/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0
    let r = height.length - 1
    let maxCap = 0
    let currCap = 0
    while (l < r) {
        currCap = (r - l) * Math.min(height[l], height[r])
        maxCap = Math.max(maxCap, currCap)
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return maxCap
};