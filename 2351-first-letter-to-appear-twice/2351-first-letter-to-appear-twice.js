/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    let charCount = {}
    for (let i = 0; i < s.length; i++) {
        charCount[s[i]] ? charCount[[s[i]]].push(i) : charCount[s[i]] = [i];
        if(charCount[s[i]].length === 2) return s[i]
    }
};