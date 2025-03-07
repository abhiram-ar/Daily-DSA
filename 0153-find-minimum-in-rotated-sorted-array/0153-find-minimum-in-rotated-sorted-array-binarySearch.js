/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0
    let r = nums.length - 1
    let res = nums[0]
    let mid


    while (l <= r) {
        if (nums[l] < nums[r]) {
            res = Math.min(nums[l], res)
        }
        mid = Math.floor((l + r) / 2)
        res = Math.min(nums[mid], res)
        if (nums[mid] < nums[r]) {
            r = mid - 1
        } else {
            l = mid + 1
        }

    }
    return res
};