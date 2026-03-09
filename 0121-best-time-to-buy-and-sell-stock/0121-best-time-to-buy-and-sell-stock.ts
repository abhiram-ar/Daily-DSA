function maxProfit(prices: number[]): number {
    let maxProfit = 0
    let mini = prices[0]
    for(let i=0;i<prices.length;i++){
        let currentProfit = prices[i] - mini
        maxProfit = Math.max(maxProfit, currentProfit)
        mini = Math.min(mini, prices[i])
    }
    return maxProfit
};