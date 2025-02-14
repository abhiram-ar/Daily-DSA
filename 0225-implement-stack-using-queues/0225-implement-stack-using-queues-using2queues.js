
var MyStack = function () {
    this.main = []
    this.aux = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.main.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (this.main.length === 0) return null
    while (this.main.length !== 1) {
        this.aux.push(this.main.shift())
    }
    let ans =  this.main.shift()
    let temp = this.main
    this.main = this.aux
    this.aux = temp
    return ans

};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    if (this.main.length === 0) return null
    while (this.main.length !== 1) {
        this.aux.push(this.main.shift())
    }
    let ans = this.main.shift()
    this.aux.push(ans)
    let temp = this.main
    this.main = this.aux
    this.aux = temp
    return ans
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.main.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */