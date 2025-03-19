/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0 || s.length === 1) return s.length

    let l = 0
    let hashset = new Set()
    let res = 0
    for (let r = 0; r < s.length; r++) {
        while (hashset.has(s[r])) {
            hashset.delete(s[l])
            l++
        }
        hashset.add(s[r])
        res = Math.max(r - l + 1, res)
    }

    return res
};
