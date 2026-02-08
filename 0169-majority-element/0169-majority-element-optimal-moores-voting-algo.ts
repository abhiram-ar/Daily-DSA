function majorityElement(nums: number[]): number {
    let elem
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            elem = nums[i]
        }
        if (nums[i] === elem) {
            count++
        } else {
            count--
        }
    };
    return elem

}