function sumOfBeauties(nums: number[]): number {

    let prefixMax = Array(nums.length)
    let max = -Infinity
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i]
        prefixMax[i] = max
    }

    let suffixMin = Array(nums.length)
    let min = Infinity
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < min) min = nums[i]
        suffixMin[i] = min
    }


    let sum = 0
    for (let i = 1; i < nums.length - 1; i++) {
        if (prefixMax[i - 1] < nums[i] && suffixMin[i + 1] > nums[i]) sum += 2
        else if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) sum += 1
    }
    return sum
};