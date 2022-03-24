/**
 * 
 * 
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let p = 0,q =1,r = 0;
    for(let i = 0; i <n ; i++) {
        r = p + q;
        p = q;
        q = r;
    }
    return r
};