/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const merged = new Array(nums1.length + nums2.length)
    let m = 0
    let p1 = 0
    let p2 = 0
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] <= nums2[p2]) {
            merged[m] = nums1[p1]
            m++
            p1++
        } else {
            merged[m] = nums2[p2]
            m++
            p2++
        }
    }
    while (p1 < nums1.length) {
        merged[m] = nums1[p1]
        m++
        p1++
    }
    while (p2 < nums2.length) {
        merged[m] = nums2[p2]
        m++
        p2++
    }

    let ans
    if (merged.length % 2 === 0) {
        ans = (merged[(merged.length) / 2] + merged[((merged.length) / 2) - 1]) / 2
    }
    else {
        ans = merged[(merged.length - 1) / 2]
    }
    return ans
};