/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const hashmap = {}
    let count = new Array(26)
    for (let str of strs) {
        count.fill(0)
        for (let char of str) {
            count[char.charCodeAt(0) - 97]++
        }
        const key = count.join(",")
        if (!hashmap[key]) {
            hashmap[key] = []

        }
        hashmap[key].push(str)

    };
    return Object.values(hashmap)
}