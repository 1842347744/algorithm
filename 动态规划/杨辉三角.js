/**
 * 
给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function(numRows) {
    let arr = [];
    for (let len = 0; len < numRows; len++) {
        const row =  new Array(len+1).fill(1);
        for (let index = 1; index < row.length - 1; index++) {
            row[index] = arr[len - 1][index-1] + arr[len - 1][index]
        }
        arr.push(row)
    }
    return arr
};