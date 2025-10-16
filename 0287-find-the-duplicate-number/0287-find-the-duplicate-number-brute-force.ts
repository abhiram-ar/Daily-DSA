function findDuplicate(nums: number[]): number {
    const map = new Set<number>()
    for(let i in nums){
        if(map.has(nums[i])) return nums[i]
        map.add(nums[i])
    }
};