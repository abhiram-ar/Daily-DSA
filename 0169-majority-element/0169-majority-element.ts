function majorityElement(nums: number[]): number {
    const count = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!count.has(nums[i])) {
            count.set(nums[i], 0)
        }
        count.set(nums[i], count.get(nums[i]) + 1)
    }

    // there would only be one majority element
    for (let [k, v] of count) {
        if (v > Math.floor(nums.length / 2)) {
            return k
        }
    }
};