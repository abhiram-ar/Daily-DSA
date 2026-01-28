/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let pivotIdx = -1
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            pivotIdx = i
            break
        }
    }

    // if all numbers are in increasesing order from R->L,
    // means the combination is the largest permutation
    if (pivotIdx === -1) {
        nums.reverse()
        return
    }

    // find the next largest number to pivot
    // and swap it with pivot so we are closer to next largest permutation
    // start from end as we need the LSP of smallest number
    let temp
    for (let i = nums.length - 1; i > pivotIdx; i--) {
        if (nums[i] > nums[pivotIdx]) {
            temp = nums[i]
            nums[i] = nums[pivotIdx]
            nums[pivotIdx] = temp
            break
        }
    }

    // since we have alreay swaped the next largest to the pivot
    // out suffir should be in the smallest permutation
    // but since our suffix is in increasing order from R->L,
    // we just need to reverse the suffix to make it in smallest order
    let l = pivotIdx+1
    let r = nums.length - 1
    while (l < r) {
        temp = nums[l]
        nums[l] = nums[r]
        nums[r] = temp
        l++
        r--
    }
};
