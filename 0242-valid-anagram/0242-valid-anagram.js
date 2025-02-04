/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false

    const counterS = new Map()
    const counterT = new Map()

    for (let i = 0; i < s.length; i++) {
        if (counterS.has(s[i])) {
            counterS.set(s[i], counterS.get(s[i]) + 1)
        }
        else {
            counterS.set(s[i], 1)
        }
        if (counterT.has(t[i])) {

            counterT.set(t[i], counterT.get(t[i]) + 1)
        }
        else {

            counterT.set(t[i], 1)
        }
    }
    if (counterS.size !== counterT.size) {
        return false
    }

    for (const [char, count] of counterS) {
        if (count !== counterT.get(char) ?? 0) {
            return false
        }

    }
    return true
}

