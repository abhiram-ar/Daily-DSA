/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashmap = new Set()

    for (let num of nums){
        if(hashmap.has(num)){
            return true
        }else{
            hashmap.add(num)
        }
    }
    return false
    
};