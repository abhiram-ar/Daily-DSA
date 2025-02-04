/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hashSet = new Set();
    for(let i=0; i<nums.length; i++){
        if(hashSet.has(nums[i])){
            return true
        }
        else {
            hashSet.add(nums[i])
        }
    }
    return false
    
};