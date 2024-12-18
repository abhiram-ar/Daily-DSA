/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    const res = []
    words.forEach(word => {
        console.log(word.split(separator))
        res.push(word.split(separator))
        })
    return res.flat().filter(str => str!="")
};