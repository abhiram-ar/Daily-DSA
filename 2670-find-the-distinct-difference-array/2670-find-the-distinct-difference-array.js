/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    const res = []
    for(let i=0; i<nums.length; i++){
        const distinctPrefix = new Set(nums.slice(0, i+1)).size
        const distinctSuffix = new Set(nums.slice(i+1)).size
        res.push(distinctPrefix - distinctSuffix)
    }
    return res

};