// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    let numsSet = new Set(nums);
    let max = 0;
    for (const num of numsSet) {
        if(!numsSet.has(num-1)) {
            let currentNum = num;
            let size = 1;
            while(numsSet.has(currentNum+1)) {
                currentNum++;
                size++;
            }
            max = Math.max(size, max)
        }
    }
    return max
};