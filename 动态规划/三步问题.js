/**
 * 
 * 三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。
 * 
 * @param {number} n
 * @return {number}
 */
 var waysToStep = function(n) {
    let p = 1,q = 2, r = 4, s = 0;
    if(n <= 2) {
        return n 
    }
    if(n === 3) {
        return 4
    }
    for(let i = 0; i<n-3; i++) {
        s = (p + q + r) % 1000000007;
        p = q;
        q = r;
        r = s;
    }
    return s;
};