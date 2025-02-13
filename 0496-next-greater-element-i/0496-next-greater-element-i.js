/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const nge = new Map()
    const stack = []

    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
            stack.pop()
        }
        if (stack.length === 0) {
            nge.set(nums2[i], -1)
        } else {
            nge.set(nums2[i], stack[stack.length - 1])
        }
        stack.push(nums2[i])
    }

    let ans = []
    for (let i = 0; i < nums1.length; i++) {
        ans.push(nge.get(nums1[i]))
    }

    return ans

};