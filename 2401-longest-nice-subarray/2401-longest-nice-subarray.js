/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
    let l = 0
    let usedBits = 0
    let res = 0
    for (let r = 0; r < nums.length; r++) {
        while((usedBits & nums[r]) !==0 ){
            usedBits ^= nums[l]
            l++
        }

        usedBits |= nums[r]
        res = Math.max(res, r - l + 1)
    }
    return res
};