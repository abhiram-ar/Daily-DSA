/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1 = m - 1
    let p2 = n - 1
    let r = nums1.length - 1
    while (p1 >= 0 && p2 >= 0) {
        if (nums2[p2] > nums1[p1]) {
            nums1[r] = nums2[p2]
            r--
            p2--
        } else {
            nums1[r] = nums1[p1]
            r--
            p1--
        }
    }
    while (p2 >= 0) {
        nums1[r] = nums2[p2]
        r--
        p2--
    }

};