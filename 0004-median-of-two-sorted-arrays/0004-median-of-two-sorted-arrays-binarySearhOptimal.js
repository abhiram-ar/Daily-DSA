/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let A = nums1, B = nums2
    let total = nums1.length + nums2.length
    let half = Math.floor(total / 2)

    //keep A the smaller array
    if (A.length > B.length) {
        [A, B] = [B, A]
    }

    // binary search on smaller array, untill parition is valid
    let l = 0, r = A.length - 1
    while (true) {
        let i = Math.floor((l + r) / 2) // index for A
        let j = half - i - 2  // index for B, since j is index and half is element count in two aray we need some correction

        let Aleft = i >= 0 ? A[i] : -Infinity
        let Aright = i + 1 < A.length ? A[i + 1] : Infinity
        let Bleft = j >= 0 ? B[j] : -Infinity
        let Bright = j + 1 < B.length ? B[j + 1] : Infinity

        // valid partition
        if (Aleft <= Bright && Bleft <= Aright) {
            if (total % 2 === 1) {
                return Math.min(Aright, Bright)
            } else {
                return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2
            }
        }
        else if (Aleft > Bright) {
            r = i - 1
        } else {
            l = i + 1
        }
    }
    return - 1
};