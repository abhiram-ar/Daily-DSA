/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const counter = {}
    for (num of nums) {
        counter[num] = (counter[num] || 0) + 1
    }

    const arr = Object.entries(counter).map(([key, count]) => [count, parseInt(key)]);
    arr.sort((a, b) => b[0] - a[0])

    return arr.slice(0, k).map(entry => entry[1])

};