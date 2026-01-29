/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    
    // count sort - 2 pass solution
    
    let count = [0, 0, 0]
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]]++
    }

    let p = 0
    for (let i = 0; i < count.length; i++) {
        let rep = 0
        while (rep < count[i]) {
            nums[p] = i
            rep++
            p++
        }
    }
};