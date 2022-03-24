// 给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。

// 下降路径 可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。具体来说，位置 (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1) 。

/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var minFallingPathSum = function(matrix) {
    if(matrix.length === 1) {
        return matrix[0];
    }
    let m = n = matrix.length,
    dp = Array.from(Array(m), ()=> Array.from(n).fill(0));
    dp[0] = matrix[0];
    for(let i = 1;i<m;i++) {
        for(let j = 0; j<n ;j++){
            if(j == 0) {
                dp[i][j] = Math.min(dp[i-1][j],  dp[i-1][j+1]) +  matrix[i][j]
            } else if(j == n-1) {
                dp[i][j] = Math.min(dp[i-1][j],  dp[i-1][j-1]) +  matrix[i][j]
            } else {
                dp[i][j] = Math.min(dp[i-1][j+1],  dp[i-1][j-1], dp[i-1][j]) +  matrix[i][j]
            }
        }
    }
    return Math.min(...dp[m-1])
};