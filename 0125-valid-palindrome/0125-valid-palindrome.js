/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.length === 1) return true
    s = s.toLowerCase()
    let l = 0
    let r = s.length - 1
    while (l < r) {
        while (l < r && !((s[l].charCodeAt(0) >= 97 && s[l].charCodeAt(0) <= 122) || (s[l].charCodeAt(0) >= 48 && s[l].charCodeAt(0) <= 57))) l++
        while (l < r && !((s[r].charCodeAt(0) >= 97 && s[r].charCodeAt(0) <= 122) || (s[r].charCodeAt(0) >= 48 && s[r].charCodeAt(0) <= 57))) r--

        if (s[l] !== s[r]) return false
        l++
        r--
    }
    return true

};