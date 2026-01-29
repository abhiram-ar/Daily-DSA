/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let low = 0
    let mid = 0
    let high = nums.length - 1

    // unsorted section = [mid...high]
    // <= is important
    while (mid <= high) {
        if (nums[mid] === 0) {
            swap(nums, low, mid)
            mid++
            low++
        } else if (nums[mid] === 1) {
            mid++
        } else {
            swap(nums, mid, high)
            high--
        }
    }

    function swap(arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp

    }
}

