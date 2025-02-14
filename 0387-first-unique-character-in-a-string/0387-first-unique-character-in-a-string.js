/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let hashmap = {}
    for (let i = 0; i < s.length; i++) {
        hashmap[s[i]] = (hashmap[s[i]] || 0) + 1
    }
    for (let i = 0; i < s.length; i++) {
        if (hashmap[s[i]] === 1) return i
    }
    return -1
};