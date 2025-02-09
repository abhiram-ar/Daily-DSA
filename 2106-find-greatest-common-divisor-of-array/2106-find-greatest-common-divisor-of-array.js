/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min = Infinity
    let max = -Infinity
    for(let i = 0; i< nums.length; i++){
        if(nums[i] > max) max = nums[i]
        if(nums[i] < min) min = nums[i]
    }
    if(min === max) return min
    let temp
    while(min !== 0){
        temp = min
        min = max % min 
        max = temp
    }
    return max




};