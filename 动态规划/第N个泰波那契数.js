/**
 * 
 * 
 泰波那契序列 Tn 定义如下： 

T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

给你整数 n，请返回第 n 个泰波那契数 Tn 的值。
 * @param {number} n
 * @return {number}
 */

// 时间超时
 var tribonacci = function(n) {
    if(n < 2) {
        return n
    } else if( n === 2) {
        return 1
    }
    while(n > 2) {
        return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3)
    }
};
// 动态规划
/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
    let p = 0,q = 1,r = 1, s = 0;
    if(n < 2) {
        return n;
    }
    if(n === 2) {
        return 1;
    }
    for(let i = 3; i <= n; i++) {
        s = p + q + r;
        p = q;
        q = r;
        r = s;
    }
    return s
};