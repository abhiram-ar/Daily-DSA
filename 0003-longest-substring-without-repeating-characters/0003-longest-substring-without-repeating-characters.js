/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let hashmap = new Map()
    let l = 0
    let longest = 0
    for (let r = 0; r < s.length; r++) {
        if (hashmap.has(s[r]) && hashmap.get(s[r]) >= l) {
            l = hashmap.get(s[r]) + 1
        }
        hashmap.set(s[r], r)
        longest = Math.max(r - l + 1, longest)
    }
    return longest
};