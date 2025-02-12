/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let map = new Map([["}", "{"], ["]", "["], [")", "("]])
    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char)
        }
        else if (stack.length > 0 &&  map.get(char) === stack[stack.length - 1]) {
            stack.pop()
        }
        else return false

    }
    return stack.length === 0 ? true : false

};