/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
    let minimizedMax = Math.max(...nums) - k
    let maximizedMin = Math.min(...nums) + k
    let res = minimizedMax - maximizedMin
    return res >=0 ? res : 0
};