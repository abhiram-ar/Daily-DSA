function findMaxConsecutiveOnes(nums: number[]): number {
    let l = -1
    let mx = 0
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === 0) {
            l = -1
            continue
        }
        if (l === -1) l = r
        if (l >= 0) mx = Math.max(mx, r - l + 1)
    }

    return mx

};