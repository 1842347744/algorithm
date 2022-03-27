// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

// 你可以按 任何顺序 返回答案。

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    let res = [];
    let path = []
    function backtracking(n,k, startIndex) {
        if(path.length === k) {
            res.push([...path])
            return
        }
        for(let i = startIndex; i <= n - (k -path.length)+1; i++) {
            path.push(i);
            backtracking(n, k, i+1)
            path.pop();
        }
    }
    backtracking(n,k,1)
    return res
};