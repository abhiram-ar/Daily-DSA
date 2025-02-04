/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }

    const count = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        count[s[i].charCodeAt(0) - "a".charCodeAt(0)] += 1
        count[t[i].charCodeAt(0) - "a".charCodeAt(0)] -= 1
    }

    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0)
            return false
    }
    return true
}

