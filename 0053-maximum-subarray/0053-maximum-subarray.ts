function maxSubArray(nums: number[]): number {
    let sum = -Infinity
    let max = -Infinity
    for(let i=0;i<nums.length;i++){
        sum = Math.max(sum+nums[i], nums[i])
        max = Math.max(max, sum)
    }
    return max

};