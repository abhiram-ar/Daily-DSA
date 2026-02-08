function majorityElement(nums: number[]): number {
    const count = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!count.has(nums[i])) {
            count.set(nums[i], 0)
        }
        count.set(nums[i], count.get(nums[i]) + 1)
    }

    let largest = [undefined, -Infinity]
    for (let [k, v] of count) {
        if (v > largest[1]) {
            largest[0] = k
            largest[1] = v
        }
    }

    return largest[0]
};