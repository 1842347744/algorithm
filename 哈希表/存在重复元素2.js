// 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。

// 暴力解法：
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    for(let i =0; i< nums.length; i++){
        for(let j =0; j< nums.length; j++){
            if(nums[i] === nums[j] && Math.abs(i - j) <= k &&  i !==j) {
                return true
            }
        }   
    }
    return false
};

// 哈希
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    let numsMap = new Map();
    for(let i = 0; i< nums.length; i++) {
        if(numsMap.has(nums[i]) && Math.abs(i - numsMap.get(nums[i])) <= k) {
            return true
        }
        numsMap.set(nums[i], i)
    }
    return false
};