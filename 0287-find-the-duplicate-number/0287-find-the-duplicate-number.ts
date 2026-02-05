function findDuplicate(nums: number[]): number {
    let slow = 0
    let fast = 0
    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if(slow === fast) break
    }

    slow = 0
    while(true){
        slow = nums[slow]
        fast = nums[fast]
        if(slow === fast) break
    }
    return slow
};