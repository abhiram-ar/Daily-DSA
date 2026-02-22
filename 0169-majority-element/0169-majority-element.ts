function majorityElement(nums: number[]): number {
    let count = 0
    let elem = 0
    for (let i = 0; i < nums.length; i++) {
        if (!elem || count === 0) elem = nums[i]

        if (nums[i] === elem) count++
        else count--
    }
    return elem
};