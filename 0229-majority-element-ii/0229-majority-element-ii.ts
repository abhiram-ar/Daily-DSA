function majorityElement(nums: number[]): number[] {
    let elem1
    let count1 = 0

    let elem2
    let count2 = 0

    for (let i = 0; i < nums.length; i++) {
        if (count1 === 0 && nums[i] !== elem2) {
            elem1 = nums[i]
        }
        if (count2 === 0 && nums[i] !== elem1) {
            elem2 = nums[i]
        }

        if (nums[i] === elem1) {
            count1++
        } else if (nums[i] === elem2) {
            count2++
        } else {
            count1--
            count2--
        }
    }

    count1 = 0
    count2 = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === elem1) count1++
        if (nums[i] === elem2) count2++
    }

    let ans = []
    if (count1 > Math.floor(nums.length / 3)) ans.push(elem1)
    if (count2 > Math.floor(nums.length / 3)) ans.push(elem2)
    return ans
};