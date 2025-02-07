/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let charHash = new Map()
    let l = 0
    let longest = 0
    for (let r = 0; r < s.length; r++) {
        if (charHash.has(s[r]) && charHash.get(s[r]) >= l) {
            l = charHash.get(s[r]) + 1
        }
        charHash.set(s[r], r)
        longest = Math.max(longest, r - l + 1)
    }
    return longest
};