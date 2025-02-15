/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    const nge = new Array(nums.length)
    const st = []
    for (let i = 2 * nums.length - 1; i >= 0; i--) {
        while (st.length > 0 && st[st.length - 1] <= nums[i % nums.length]) {
            st.pop()
        }
        if (i < nums.length) {
            nge[i] = st.length === 0 ? -1 : st[st.length - 1]
        }
        st.push(nums[i % nums.length])
    }
    return nge
};