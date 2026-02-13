class MyStack {
    public queue: number[] = []
    constructor() {
    }

    push(x: number): void {
        const size = this.queue.length
        this.queue.push(x)

        let temp
        for (let i = 0; i < size; i++) {
            temp = this.queue.shift()
            this.queue.push(temp)
        }
    }

    pop(): number {
        return this.queue.shift()
    }

    top(): number {
        return this.queue[0]
    }

    empty(): boolean {
        return this.queue.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */