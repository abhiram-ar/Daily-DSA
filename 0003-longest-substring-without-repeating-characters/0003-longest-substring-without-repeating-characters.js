/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let charHash = new Set()
    let l = 0
    let longest = 0
    for (let r = 0; r < s.length; r++) {
        while (charHash.has(s[r])) {
            charHash.delete(s[l])
            l++
        }
        charHash.add(s[r])
        longest = Math.max(longest, r - l + 1)
    }
    return longest
};