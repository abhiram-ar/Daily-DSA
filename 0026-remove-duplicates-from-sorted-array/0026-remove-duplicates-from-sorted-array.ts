function removeDuplicates(nums: number[]): number {
    let ptr = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[ptr] !== nums[i]) nums[++ptr] = nums[i]
    }
    console.log(nums)
    return ptr+1
};