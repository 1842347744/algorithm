
// 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    let row = grid.length;
    let column = grid[0].length;
    let dp = Array.from(Array(row), () => Array(column).fill(0));
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < column; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
        }
    }
    return dp[row-1][column-1]
};