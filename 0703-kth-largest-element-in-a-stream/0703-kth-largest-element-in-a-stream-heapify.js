/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.heap = new Array(k).fill(null)
    this.maxSize = k
    this.heapSize = 0

    this.parent = (i) => {
        return Math.floor((i - 1) / 2)
    }

    this.insert = (val) => {
        let i = this.heapSize
        this.heap[i] = val
        this.heapSize++
        while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
            let temp = this.heap[i]
            this.heap[i] = this.heap[this.parent(i)]
            this.heap[this.parent(i)] = temp
            i = this.parent(i)
        }
    }

    this.heapify = (i) => {
        let min = i
        let l = 2 * i + 1
        let r = 2 * i + 2
        if (l < this.heapSize && this.heap[l] < this.heap[min]) min = l
        if (r < this.heapSize && this.heap[r] < this.heap[min]) min = r
        if (min !== i) {
            const temp = this.heap[i]
            this.heap[i] = this.heap[min]
            this.heap[min] = temp
            this.heapify(min)
        }
    }

    this.popMin = () => {
        let popped = this.heap[0]
        this.heap[0] = this.heap[this.heapSize - 1]
        this.heapSize--
        this.heapify(0)
    }



    for (let num of nums) {
        if (this.heapSize >= this.maxSize && num >= this.heap[0]) {
            this.popMin()
        }
        if (this.heapSize < this.maxSize) {
            this.insert(num)
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this.heapSize >= this.maxSize && val >= this.heap[0]) {
        this.popMin()
    }
    if (this.heapSize < this.maxSize) {
        this.insert(val)
    }
    return this.heap[0]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */