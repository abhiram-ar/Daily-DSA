class MyStack {
    public mainq: number[] = []
    public auxq: number[] = []
    constructor() {
    }

    push(x: number): void {
        this.auxq.push(x)
        while(this.mainq.length !== 0){
            this.auxq.push(this.mainq.shift())
        }
        let temp = this.mainq
        this.mainq = this.auxq
        this.auxq = temp
    }

    pop(): number {
        return this.mainq.shift()
    }

    top(): number {
        return this.mainq[0]
    }

    empty(): boolean {
        return this.mainq.length === 0
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