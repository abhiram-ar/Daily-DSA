function searchRange(nums: number[], target: number): number[] {
    let ans = [-1, -1]
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (nums[mid] === target) {
            let start = mid
            while (nums[start] === target) ans[0] = start--

            let end = mid
            while (nums[end] === target) ans[1] = end++
            return ans
        } else if (target < nums[mid]) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return ans
};