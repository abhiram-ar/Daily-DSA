/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let Ssum = 0
    let Dsum = 0

    nums.forEach(num=> {
        if(Math.floor(num/10) === 0){
            Ssum += num
        }else{
            Dsum += num
        }
    })
    return Ssum !== Dsum
};