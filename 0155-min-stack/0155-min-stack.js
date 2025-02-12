
var MinStack = function () {
    this.stack = []
    this.mini = Infinity
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.stack.length === 0) {
        this.stack.push(val)
        this.mini = val
        return
    }
    if (val > this.mini) {
        this.stack.push(val)
    }
    else {
        this.stack.push(2 * val - this.mini)
        this.mini = val
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack.length === 0) return
    const deleted = this.stack.pop()
    if (deleted < this.mini) {
        this.mini = 2 * this.mini - deleted
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.stack.length === 0) return
    let t = this.stack[this.stack.length - 1]
    if (t < this.mini) return this.mini
    return t

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.mini
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */