function maxProfit(prices: number[]): number {
    let mini = prices[0]
    let maxProfit = 0

    let currentProfit
    for (let i = 0; i < prices.length; i++) {
        currentProfit = prices[i] - mini
        maxProfit = Math.max(maxProfit, currentProfit)
        mini = Math.min(mini, prices[i])
    }

    return maxProfit
};