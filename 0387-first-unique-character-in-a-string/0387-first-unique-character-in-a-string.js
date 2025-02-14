/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let hashmap = {}
    let orderq = []
    for (let i = 0; i < s.length; i++) {
        orderq.push([s[i], i])
        hashmap[s[i]] = (hashmap[s[i]] || 0) + 1
    }
    for (let [char, index] of orderq) {
        if (hashmap[char] === 1) return index
    }
    return -1
};