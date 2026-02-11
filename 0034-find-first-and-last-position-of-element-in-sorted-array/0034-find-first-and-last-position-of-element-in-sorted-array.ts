function lastOccurance(arr: number[], k: number): number {
    let l = 0
    let r = arr.length - 1
    let mid
    while (l <= r) {
        mid = Math.floor((l + r) / 2)
        if (arr[mid] === k && (mid === arr.length - 1 || arr[mid + 1] > k)) return mid
        else if (k < arr[mid]) r = mid - 1
        else l = mid + 1
    }
    return -1
}

function firstOccurance(arr: number[], k: number): number {
    let l = 0
    let r = arr.length - 1
    let mid
    while (l <= r) {
        mid = Math.floor((l + r) / 2)

        console.log(arr[mid])

        if (arr[mid] === k && (mid === 0 || arr[mid - 1] < k)) return mid
        else if (arr[mid] < k) l = mid + 1
        else r = mid - 1
    }
    return -1
}

function searchRange(nums: number[], target: number): number[] {
    const first = firstOccurance(nums, target)
    if (first === -1) return [-1, -1]
    const last = lastOccurance(nums, target)
    return [first, last]
};