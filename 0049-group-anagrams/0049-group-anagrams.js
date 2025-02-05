/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const hashmap = {}
    for (let str of strs) {
        const count = new Array(26).fill(0)
        for (let char of str) {
            count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1
        }
        const key = count.join(",")
        if (!hashmap[key]) {
            hashmap[key] = []

        }
        hashmap[key].push(str)

    };
    return Object.values(hashmap)
}