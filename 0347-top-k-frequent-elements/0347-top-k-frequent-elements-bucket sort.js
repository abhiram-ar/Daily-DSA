/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const counter = {}
    const freq = Array.from({ length: nums.length + 1 }, () => [])

    for (const n of nums) {
        counter[n] = (counter[n] || 0) + 1
    }
    for (const n in counter) {
        freq[counter[n]].push(parseInt(n))
    }
    const res = []
    for (let i = freq.length - 1; i > 0; i--) {
        for (let item of freq[i]) {
            res.push(item)
            if (res.length === k) {
                return res
            }
        }
    }
};