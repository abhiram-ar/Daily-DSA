/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0
    let wealth = 0
    for (let i = 0; i < accounts.length; i++) {
        wealth = 0
        for (let j = 0; j < accounts[0].length; j++) {
            wealth += accounts[i][j]
        }
        max = Math.max(max, wealth)
    }

    return max

};