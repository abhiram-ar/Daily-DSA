function twoSum(nums: number[], target: number): number[] {
    let hash = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            return [hash.get(nums[i]), i]
        }

        let diff = target - nums[i]
        hash.set(diff, i)
    }
};