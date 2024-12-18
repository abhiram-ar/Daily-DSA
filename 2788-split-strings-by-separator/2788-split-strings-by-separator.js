/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    const res = []
    words.forEach(word => {
        word.split(separator).forEach(chunk=> chunk!== "" && res.push(chunk))
        })
    return res.flat()
};