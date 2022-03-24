/**
 * 
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

 * @param {number[]} prices
 * @return {number}
 */

// 暴力解法,超过了leetcode的时间限制
var maxProfit = function(prices) {
    let max = 0;
    let temp = 0;
    for(let i = 0; i < prices.length-1; i++) {
        for(let j = i+1; j< prices.length; j++) {
            temp = prices[j]  - prices[i];
            if (temp > max) {
                max = temp
            }
        }
    }
    return max
};

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let maxProf = 0;
    let minPrice = prices[0];
    for(let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i])
        maxProf = Math.max(prices[i] - minPrice, maxProf)
    }
    return maxProf
};
