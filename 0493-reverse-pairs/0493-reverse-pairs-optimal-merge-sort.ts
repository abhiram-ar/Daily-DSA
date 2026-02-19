function merge(arr, low, mid, high) {
    let count = 0
    let sorted = Array(high - low + 1)
    let i = low
    let j = mid + 1
    while (i <= mid && j <= high) {
        if (arr[i] > 2 * arr[j]) {
            count += (mid - i + 1)
            j++
        } else i++
    }

    i = low
    j = mid + 1
    let p = 0
    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) sorted[p++] = arr[i++]
        else sorted[p++] = arr[j++]
    }
    while (i <= mid) sorted[p++] = arr[i++]
    while (j <= high) sorted[p++] = arr[j++]

    p = low
    for (let i = 0; i < sorted.length; i++) {
        arr[p++] = sorted[i]
    }

    return count
}


function ms(arr, low, high) {
    let count = 0
    if (low >= high) return count
    const mid = Math.floor((low + high) / 2)
    count += ms(arr, low, mid)
    count += ms(arr, mid + 1, high)
    count += merge(arr, low, mid, high)
    return count
}

function reversePairs(nums: number[]): number {
    return ms(nums, 0, nums.length - 1)
};