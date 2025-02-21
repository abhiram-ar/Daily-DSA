/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    function heapify(arr, size, i) {
        let max = i
        let l = 2 * i + 1
        let r = 2 * i + 2

        if (l < size && arr[l] > arr[max]) max = l
        if (r < size && arr[r] > arr[max]) max = r

        if (i !== max) {
            const temp = arr[i]
            arr[i] = arr[max]
            arr[max] = temp
            heapify(arr, size, max)
        }
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        heapify(nums, nums.length, i)
    }

    for (let i = 0; i < k - 1; i++) {
        let pop = nums[0]
        nums[0] = nums[nums.length - 1 - i]
        heapify(nums, nums.length - 1 - i, 0)
    }
    return nums[0]

};