/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hashSet = new Set();
    for (const num of nums){
        if(hashSet.has(num)){
            return true
        }
        else {
            hashSet.add(num)
        }
    }
    return false
    
};