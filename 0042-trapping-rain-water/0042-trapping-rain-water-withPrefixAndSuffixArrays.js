/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const prefixMax = []
    const suffixMax = []
    prefixMax[0] = height[0]
    for (let i = 1; i < height.length; i++) {
        prefixMax[i] = Math.max(prefixMax[i - 1], height[i])
    }

    suffixMax[height.length - 1] = height[height.length - 1]
    for (let i = height.length - 2; i >= 0; i--) {
        suffixMax[i] = Math.max(suffixMax[i + 1], height[i])
    }

    console.log(prefixMax, suffixMax)

    let total = 0
    for (let i = 0; i < height.length; i++) {
        if (height[i] < suffixMax[i] && height[i] < prefixMax[i]) {
            total += Math.min(suffixMax[i], prefixMax[i]) - height[i]
        }
    }

    return total
};
