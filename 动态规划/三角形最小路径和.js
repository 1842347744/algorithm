// 给定一个三角形 triangle ，找出自顶向下的最小路径和。

// 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
    let m = triangle.length, n = triangle[m-1].length, total;
    let dp = Array.from(Array(m),()=>Array(n).fill(0));
    dp[0] = triangle[0];
    for(let i = 0; i<m; i++) {
        for(let j = 0;j<i+1; j++) {
            if(j && i) {
                dp[i][j] =  Math.min(dp[i-1][j], dp[i-1][j-1]) +  triangle[i][j]
            }
            if(j == 0 && i) {
                dp[i][j] = dp[i-1][j] + triangle[i][j]
            } 
            if(j == i && i) {
                dp[i][j] = dp[i-1][j-1] + triangle[i][j]
            }
        }
    }
    total = dp[m-1][0];
    for(let i = 1;i < n; i++) {
        total = Math.min(total, dp[m-1][i])
    }
    return total
};