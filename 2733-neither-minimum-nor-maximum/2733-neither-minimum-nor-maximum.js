/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
    let min = Infinity
    let max = -Infinity
    let res

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) min = nums[i]
        if (nums[i] > max) max = nums[i]
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== min && nums[i] !== max) {
            res = nums[i]
            break
        }
    }

    return res ?? -1
};