class KthLargest {
    private arr: number[]
    private size: number
    private maxSize: number
    constructor(k: number, nums: number[]) {
        this.arr = new Array(k).fill(null)
        this.size = 0
        this.maxSize = k
        for (let i = 0; i < nums.length; i++) {
            this.add(nums[i])
        }
    }

    parent(idx: number): number {
        return Math.floor((idx - 1) / 2)
    }

    heapify(arr, i) {
        while (true) {
            let min = i
            let left = 2 * i + 1
            let right = 2 * i + 2

            if (left < this.size && arr[left] < arr[min]) min = left
            if (right < this.size && arr[right] < arr[min]) min = right

            if (min === i) break
            [arr[i], arr[min]] = [arr[min], arr[i]];
            i = min
        }
    }

    popTop() {
        if (this.size === 0) return

        if (this.size === 1) {
            const deleted = this.arr[0]
            this.arr[0] = null
            this.size--
            return deleted
        }

        const deleted = this.arr[0]
        this.arr[0] = this.arr[this.size - 1]

        this.arr[this.size - 1] = null
        this.size--

        this.heapify(this.arr, 0)

        return deleted
    }

    insert(val) {
        let i = this.size
        this.arr[i] = val
        this.size++

        while (i >= 0 && this.arr[this.parent(i)] > this.arr[i]) {
            [this.arr[this.parent(i)], this.arr[i]] = [this.arr[i], this.arr[this.parent(i)]];
            i = this.parent(i)
        }
    }

    add(val: number): number {
                                // duplicate handleing >=
        if (this.size >= this.maxSize && val >= this.arr[0]) {
            this.popTop()
        }
        if (this.size < this.maxSize) {
            this.insert(val)
        }
        return this.arr[0]
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */