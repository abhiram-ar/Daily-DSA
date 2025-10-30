// logn
function heapify(arr, idx, size) {
    while (true) {
        let max = idx
        let left = idx * 2 + 1
        let right = 2 * idx + 2

        if (left < size && arr[left] > arr[max]) max = left
        if (right < size && arr[right] > arr[max]) max = right

        if (max === idx) break;

        [arr[idx], arr[max]] = [arr[max], arr[idx]];
        idx = max
    }
}
// logn
function remove(arr) {
    if (arr.length === 0) return null
    if (arr.length === 1) {
        let removed = arr.pop()
        return removed
    }

    let removed = arr[0]
    arr[0] = arr[arr.length - 1]
    arr[arr.length - 1] = null
    arr.pop()
    heapify(arr, 0, arr.length)

    return removed
}

function parent(i) {
    return Math.floor((i - 1) / 2)
}

function add(arr, val) {
    arr.push(val)
    let i = arr.length - 1

    while (i >= 0 && arr[parent(i)] < arr[i]) {
        let p = parent(i);
        [arr[p], arr[i]] = [arr[i], arr[p]];
        i = p
    }

}

function lastStoneWeight(stones: number[]): number {
    for (let i = Math.floor(stones.length / 2); i >= 0; i--) {
        heapify(stones, i, stones.length)
    }

    while (true) {
        let y = remove(stones)
        if (!y) return 0

        let x = remove(stones)
        if (!x) return y

        let diff = y - x
        if (diff > 0) {
            add(stones, diff)

        }
    }
};