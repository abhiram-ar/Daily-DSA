function sortArray(nums: number[]): number[] {

    function merge(arr, low, mid, high) {
        let sorted = []
        let l = low
        let r = mid + 1

        while (l <= mid && r <= high) {
            if (arr[l] <= arr[r]) sorted.push(arr[l++])
            else sorted.push(arr[r++])
        }

        while (l <= mid) sorted.push(arr[l++])
        while (r <= high) sorted.push(arr[r++])

        for (let i = low; i <= high; i++) {
            arr[i] = sorted[i - low]
        }
        return arr
    }

    function mergeSort(arr, low, high) {
        if (low >= high) return arr
        let mid = Math.floor((low + high) / 2)
        mergeSort(arr, low, mid)
        mergeSort(arr, mid + 1, high)
        return merge(arr, low, mid, high)
    }

    return mergeSort(nums, 0, nums.length - 1)
};