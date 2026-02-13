class MyCircularQueue {
    public front = -1
    public rear = -1

    public arr: number[] | null
    public size = 0
    public capacity: number = 0

    constructor(k: number) {
        this.arr = Array(k).fill(undefined)
        this.capacity = k
    }

    enQueue(value: number): boolean {
        if (this.isFull()) return false
        this.rear = (this.rear + 1) % this.capacity
        this.arr[this.rear] = value
        this.size++
        if (this.front === -1) {
            this.front++
        }
        return true
    }

    deQueue(): boolean {
        if (this.isEmpty()) return false
        this.arr[this.front] = undefined
        this.front = (this.front + 1) % this.capacity
        this.size--
        if (this.size === 0) {
            this.front = -1
            this.rear = -1
        }
        return true
    }

    Front(): number {
        if (this.isEmpty()) return -1
        return this.arr[this.front]
    }

    Rear(): number {
        if (this.isEmpty()) return -1
        return this.arr[this.rear]
    }

    isEmpty(): boolean {
        return this.size === 0
    }

    isFull(): boolean {
        return this.size === this.capacity
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */