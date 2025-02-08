/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let l = 0
    let r = nums.length - 1
    let res = [-1, -1]
    let mid
    while (l <= r) {
        mid = Math.floor((l + r) / 2)
        if (nums[mid] === target && (mid === 0 || nums[mid - 1] < target)) {
            res[0] = mid
            break
        }
        if (nums[mid] >= target) r = mid - 1
        else l = mid + 1
    }
    if(res[0] === -1) return res

    // we dont need to reset l = 0, last occurance will be from fist occurance to last position
    r = nums.length - 1
    mid = undefined
    while (l <= r) {
        mid = Math.floor((l + r) / 2)
        if (nums[mid] === target && (mid === nums.length - 1 || nums[mid + 1] > target)) {
            res[1] = mid
            break
        }
        if (nums[mid] > target) r = mid - 1
        else l = mid + 1
    }
    return res


};