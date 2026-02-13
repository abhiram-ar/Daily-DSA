class MyQueue {
    public mainst: number[] = []
    public auxst: number[] = []
    constructor() {
    }

    push(x: number): void {
        while (this.mainst.length !== 0) {
            this.auxst.push(this.mainst.pop())
        }
        this.mainst.push(x)

        while (this.auxst.length !== 0) {
            this.mainst.push(this.auxst.pop())
        }
    }

    pop(): number {
        return this.mainst.pop()
    }

    peek(): number {
        return this.mainst.at(-1)
    }

    empty(): boolean {
        return this.mainst.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */