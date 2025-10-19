function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)
    let res: [number, number, number][] = []

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue // prev element will be processed
        }

        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            let threeSum = nums[i] + nums[j] + nums[k]
            if (threeSum > 0) {
                k--
            }
            else if (threeSum < 0) {
                j++
            } else {
                res.push([nums[i], nums[j], nums[k]])
                // updating j pointer for next iteration if i
                // we can also update k, but it can be annoying
                j++
                k-- // when we increase j then we need to decrease k to converse to another solution
                while (nums[j] === nums[j - 1] && j < k) {
                    j++
                }
            }
        }

    }
    return res
};