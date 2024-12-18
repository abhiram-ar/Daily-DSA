/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    const hashmap = new Map()
    nums.forEach(num => {
        if (hashmap.has(num)) return hashmap.set(num, hashmap.get(num) + 1)
        hashmap.set(num, 1)
    })
    console.log(hashmap)
    let sum = Array.from(hashmap).filter((entry) => entry[1] === 1).reduce((sum, current) => sum += current[0], 0)
    return sum

};