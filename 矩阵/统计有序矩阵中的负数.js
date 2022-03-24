// 给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 

// 请你统计并返回 grid 中 负数 的数目。
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
    let num = 0;
    const m = grid.length;
    const n = grid[0].length;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++){
            if(grid[i][j]< 0) {
                num = num + n -j;
                break;
            }
        }
    }
    return num
};