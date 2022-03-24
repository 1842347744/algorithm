// 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数

// 输入：[1,12,-5,-6,50,3], k = 4
// 输出：12.75
// 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75

// 1 <= k <= n <= 30,000。
// 所给数据范围 [-10,000，10,000]。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findMaxAverage = function(nums, k) {
    // 先求出第一个窗口的值
    let total = 0;
    let max = 0;
    for(let i = 0; i < k; i++ ) {
        total += nums[i]
    }
    max = total;
    // 利用第一个窗口的值 求出后面窗口的值  得到最大值
    for(let j=k;j<nums.length;j++) {
        total = total + nums[j] - nums[j-k];
        max = Math.max(res, total)
    }
    return max/k
};