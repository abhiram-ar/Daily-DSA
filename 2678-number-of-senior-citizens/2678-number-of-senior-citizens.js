/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    const ages = details.map(str => parseInt(str.slice(11,13)))
    console.log(ages)
    return ages.filter(age => age > 60).length
};