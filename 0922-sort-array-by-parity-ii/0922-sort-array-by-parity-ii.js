/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
    let evenIndex = 0
    let oddIndex = 1
    const result = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            result[evenIndex] = nums[i]
            evenIndex += 2
        }
        else {
            result[oddIndex] = nums[i]
            oddIndex +=2
        }

    }
    return result
};