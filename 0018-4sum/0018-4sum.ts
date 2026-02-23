function fourSum(nums: number[], target: number): number[][] {
    let ans = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
                let k = j + 1
            let l = nums.length - 1
            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l]
                if (sum < target) k++
                else if (sum > target) l--
                else {
                    ans.push([nums[i], nums[j], nums[k], nums[l]])
                    k++
                    l--
                    while (k < l && nums[k] === nums[k - 1]) k++
                    while (k < l &&nums[l] === nums[l + 1]) l--
                }
            }
        }
    }
    return ans
};