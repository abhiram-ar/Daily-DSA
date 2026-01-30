function maxProfit(prices: number[]): number {
    let mini = prices[0]
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        const currentProfit = prices[i] - mini
        maxProfit = Math.max(maxProfit, currentProfit)
        mini = Math.min(mini, prices[i])
    }

    return maxProfit
};