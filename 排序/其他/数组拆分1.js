// 给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。
// 返回该 最大总和 。
/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
    nums = nums.sort((a,b)=>{return a-b});
    let sum = 0;
    for(let i =0;i<nums.length; i++) {
        sum+=(i % 2 === 0 ? nums[i] : 0)
    }
    return sum
};


// 优化
var arrayPairSum = function(nums) {
    nums = nums.sort((a,b)=>{return a-b});
    let sum = 0;
    for(let i =0;i<nums.length; i+=2) {
        sum+= nums[i]
    }
    return sum
};