// 给你一个整数方阵 arr ，定义「非零偏移下降路径」为：从 arr 数组中的每一行选择一个数字，且按顺序选出来的数字中，相邻数字不在原数组的同一列。

// 请你返回非零偏移下降路径数字和的最小值。

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minFallingPathSum = function(grid) {
    let m = grid.length, n = grid[0].length,
    dp = Array.from(Array(m), ()=> Array(n).fill(0));
    dp[0] = grid[0];
    for(let i = 1; i < m; i++) {
        for(let j = 0; j < n; j++) {
            let arr = []
            if(j === 0) {
                arr = dp[i-1].slice(1);
            } else if (j === n-1) {
                arr = dp[i-1].slice(0, n-1);
            } else {
                arr = [].concat(dp[i-1].slice(0, j), dp[i-1].slice(j+1)) ;
            }
            dp[i][j] = Math.min(...arr ) + grid[i][j]
        }
    }
    return Math.min(...dp[m-1])
};