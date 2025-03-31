/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let l = 0
    let res = 0
    let freq = Array(26).fill(0)
    for (let r in s) {
        freq[s.charCodeAt(r) - 65]++

        while (((r - l + 1) - Math.max(...freq)) > k) {
            freq[s.charCodeAt(l) - 65]--
            l++
        }

        res = Math.max(res, r - l + 1)
    }
    return res
};