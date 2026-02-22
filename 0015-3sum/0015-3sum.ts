function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)
    let res: [number, number, number][] = []

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue // skip tripet starting with same i as prev
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
                // when we increase j then we need to decrease k 
                // to find another solution that sum-up to 0
                j++
                k-- 
                
                // avoiding thriplet starting with same j as prev
                while (j < k && nums[j] === nums[j - 1] ) {
                    j++
                }
            }
        }

    }
    return res
};