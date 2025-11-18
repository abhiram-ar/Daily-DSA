function topKFrequent(nums: number[], k: number): number[] {
    const count = new Map<number, number>()
    // adjust for zero index, we need to have count from 1
    const bucket = Array.from({ length: nums.length + 1 }, () => [])

    for (let i = 0; i < nums.length; i++) {
        count.set(nums[i], (count.get(nums[i]) ?? 0) + 1)
    }

    for (let [num, freq] of count) {
        bucket[freq].push(num)
    }

    let ans = []
    for (let i = bucket.length - 1; i >= 0; i--) {
        for (let num of bucket[i]) {
            ans.push(num)
            if (ans.length === k) return ans
        }
    }
};