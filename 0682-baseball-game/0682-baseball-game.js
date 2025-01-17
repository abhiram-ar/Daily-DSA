/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    const res = []
    for (let i = 0; i < operations.length; i++) {
        console.log(res)
        if (operations[i] === "C") res.pop()
        else if (operations[i] === "+") res.push(res[res.length - 1] + res[res.length - 2])
        else if (operations[i] === "D") res.push(2 * res[res.length - 1])
        else res.push(Number(operations[i]))
    }
   
    return res.reduce((sum, score) => sum +=score, 0)
};