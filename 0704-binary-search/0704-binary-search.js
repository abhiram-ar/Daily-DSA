/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0
    let r = nums.length - 1
    let mid
    while (l <= r) {
        mid = Math.floor((l + r) / 2)
        if (nums[mid] === target) return mid
        else if (target < nums[mid]) r = mid - 1
        else l = mid + 1
    }
    return -1
};