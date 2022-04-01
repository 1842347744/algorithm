// 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

// 测试用例的答案是一个 32-位 整数。

// 子数组 是数组的连续子序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    let max = nums[0], imax = 1, imin = 1;
    for(let i=0; i<nums.length; i++){
        if(nums[i] < 0){ 
            [imax, imin]= [imin, imax]
        }
        imax = Math.max(imax*nums[i], nums[i]);
        imin = Math.min(imin*nums[i], nums[i]);
        max = Math.max(max, imax);
    }
    return max;
};