/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let p = -1
    for (let char of s) {
        p = t.indexOf(char, p+1)
        if (p === -1) return false
    }
    return true
};