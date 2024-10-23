/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let hashset = new Set()
    let duplicateNums = []
    for(let num of nums){
        if(hashset.has(num)) duplicateNums.push(num)
        else hashset.add(num)

        if(duplicateNums.length === 2) break
    }

    return duplicateNums
    
};