function merge(arr, low, mid, high) {
    let sorted = []
    let p1 = low
    let p2 = mid + 1
    while (p1 <= mid && p2 <= high) {
        if (arr[p1] <= arr[p2]) sorted.push(arr[p1++])
        else sorted.push(arr[p2++])
    }
    while (p1 <= mid) sorted.push(arr[p1++])
    while (p2 <= high) sorted.push(arr[p2++])

    let p = low
    for (let i = 0; i < sorted.length; i++) {
        arr[p++] = sorted[i]
    }
    return arr
}


function mergeSort(arr, low, high) {
    if (low >= high) return arr
    const mid = Math.floor((low + high) / 2)
    mergeSort(arr, low, mid)
    mergeSort(arr, mid + 1, high)
    return merge(arr, low, mid, high)
}

function sortArray(nums: number[]): number[] {
    return mergeSort(nums, 0, nums.length - 1)
};