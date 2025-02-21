/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    function heapify(arr, size, i) {
        let max = i
        let l = 2 * i + 1
        let r = 2 * i + 2
        if (l < size && arr[l] > arr[max]) max = l
        if (r < size && arr[r] > arr[max]) max = r
        if (max != i) {
            let temp = arr[i]
            arr[i] = arr[max]
            arr[max] = temp
            heapify(arr, size, max)
        }
    }

    function heapSort(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            heapify(arr, arr.length, i)
        }
        for (let i = 0; i < arr.size; i++) {
            let min = arr[0]
            arr[0] = arr[arr.size - 1 - i]
            arr[arr.size - 1 - i] = temp
            heapify(arr, arr.size - 1, 0)
        }
    }

    function removeMax(arr, size) {
        let poped = arr[0]
        arr[0] = arr[size - 1]
        arr[size - 1] = null
        heapify(arr, size - 1, 0)
        return poped
    }
    
    heapSort(stones)
    let size = stones.length
    
    while (size > 1) {
        let y = removeMax(stones, size)
        size--
        let x = removeMax(stones, size)
        size--
        if (y - x !== 0) {
            let i = size
            stones[i] = y - x
            size++
            while (i > 0 && stones[Math.floor((i - 1) / 2)] < stones[i]) {
                let temp = stones[i]
                stones[i] = stones[Math.floor((i - 1) / 2)]
                stones[Math.floor((i - 1) / 2)] = temp
                i = Math.floor((i - 1) / 2)
            }
        }
    }
    return stones[0] ?? 0
};