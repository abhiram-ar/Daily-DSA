/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
    const res = []
    words.forEach(word => {
        const chunks = word.split(separator)
        console.log(chunks)
        // chunksforEach(chunk => chunk !== "" ? res.push(chunk) : null)
    })
    return res