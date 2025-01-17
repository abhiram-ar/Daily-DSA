/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    const hashmap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (hashmap.has(nums[i])) {
            hashmap.set(nums[i], hashmap.get(nums[i]) + 1)
        }
        else
            hashmap.set(nums[i], 1)
    }
    const frequencies = Array.from(hashmap.values())
    const maxFreq = Math.max(...frequencies)
    return frequencies.reduce((sum, current) => current === maxFreq ? sum + current : sum, 0)

};