// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    let m = grid.length , n = grid[0].length, dp = Array.from(Array(m), () => Array(n).fill(0));
    dp[0][0] = grid[0][0]
    for(let i = 0; i< m;i++) {
        for(let j =0; j< n ; j++) {
            if(i && j) {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
            } else if (i) {
                dp[i][j] = dp[i-1][j] + grid[i][j]
            } else if (j) {
                dp[i][j] = dp[i][j-1] + grid[i][j]
            }
        }
    }
    return dp[m-1][n-1]
};