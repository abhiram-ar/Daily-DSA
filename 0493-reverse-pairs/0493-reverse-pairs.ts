function merge(arr, low, mid, high) {
    let count = 0
    let i = low
    let j = mid + 1
    let sorted = []

    while (i <= mid && j <= high) {
        if (arr[i] > 2 * arr[j]) {
            count += (mid - i + 1)
            j++
        } else i++
    }

    i = low
    j = mid + 1
    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) sorted.push(arr[i++])
        else sorted.push(arr[j++])
    }
    while (i <= mid) sorted.push(arr[i++])
    while (j <= high) sorted.push(arr[j++])

    for (let i = low; i<= high; i++) {
        arr[i] = sorted[i - low]
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