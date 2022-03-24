/**
 * 
 * 
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((num) => {
        if(pre > 0) {
            pre = Math.max(pre + num, num);
        } else {
            pre = num
        }
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let p = 0, q = nums[0];
    for(let i = 0; i<nums.length; i++) {
        if(p>0) {
            p += nums[i]
        } else {
            p = nums[i]
        }
        q = Math.max(p, q)
    }
    return q
};