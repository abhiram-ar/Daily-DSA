/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false

    const s1Freq = Array(26).fill(0)
    const s2Freq = Array(26).fill(0)
    for (let i in s1) {
        s1Freq[s1.charCodeAt(i) - "a".charCodeAt(0)]++
        s2Freq[s2.charCodeAt(i) - "a".charCodeAt(0)]++
    }

    // optimization: rather than looping through the frequency array,
    // we can use a variable to hold the matches count, if mathces equal to 26 it is a permuatation

    // first check the  initial matches
    let matches = 0
    for (let i = 0; i < 26; i++) {
        if (s2Freq[i] === s1Freq[i]) {
            matches++
        }
    }

    let l = 0;
    for (let r = s1.length; r < s2.length; r++) {
        if (matches === 26) return true

        // for right pointer
        let rIndex = s2.charCodeAt(r) - "a".charCodeAt(0)
        s2Freq[rIndex]++
        if (s2Freq[rIndex] === s1Freq[rIndex]) {
            matches++
        } else if (s2Freq[rIndex] === s1Freq[rIndex] + 1) {
            // if the increment in frequncy by right pointer invalidated the previous match
            matches--
        }


        // similar logic for left pointer
        let lIndex = s2.charCodeAt(l) - "a".charCodeAt(0)
        s2Freq[lIndex]--
        if (s2Freq[lIndex] === s1Freq[lIndex]) {
            matches++
        } else if (s2Freq[lIndex] + 1 === s1Freq[lIndex]) {
            matches--
        }
        l++
    }

    return matches === 26

};