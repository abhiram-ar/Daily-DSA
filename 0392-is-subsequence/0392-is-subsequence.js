/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let p = 0
    let q = 0

    while (p < s.length && q < t.length) {
        if (t[q] === s[p]) p++
        q++
    }
    return p < s.length ? false : true
};