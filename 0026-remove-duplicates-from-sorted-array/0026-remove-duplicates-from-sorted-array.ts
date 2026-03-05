function removeDuplicates(nums: number[]): number {
    let ptr = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[ptr] !== nums[i]) nums[++ptr] = nums[i]
    }
    return ptr+1
};