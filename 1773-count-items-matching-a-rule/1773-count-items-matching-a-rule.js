/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let count = 0
    for (let i = 0; i < items.length; i++) {
        if (ruleKey === "type" && ruleValue === items[i][0]) count++
        if (ruleKey === "color" && ruleValue === items[i][1]) count++
        if (ruleKey === "name" && ruleValue === items[i][2]) count++
    }
    return count
};