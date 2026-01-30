function validPalindrome(s: string): boolean {
    let l = 0
    let r = s.length - 1
    let mismatch = false
    while (l <= r) {
        if (s[l] === s[r]) {
            l++
            r--
            continue
        } else {
            mismatch = true
            break
        }
    }
    if (!mismatch) return true


    let l1 = l + 1, r1 = r
    let res1 = true
    while (l1 <= r1) {
        if (s[l1] === s[r1]) {
            l1++
            r1--
            continue
        } else {
            res1 = false
            break
        }
    }

    r = r - 1
    let res2 = true
    while (l <= r) {
        if (s[l] === s[r]) {
            l++
            r--
            continue
        } else {
            res2 = false
            break
        }
    }

    return res1 || res2
};