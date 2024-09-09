/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let ans = []
    let index = 0
    while(arr.length > index){
        ans.push(arr.slice(index, index + size))
        index += size
    }
    return ans;
    
};
