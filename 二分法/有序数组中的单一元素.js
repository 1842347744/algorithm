// 给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。

// 请你找出并返回只出现一次的那个数。

// 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNonDuplicate = function(nums) {
    let start = 0, end = nums.length -1, mid;
    while(start < end) {
        mid = ((end- start) >> 1) + start;
        if (nums[mid] === nums[mid^1]) {
            start = mid+1
        } else {
            end = mid
        }
    }
    return nums[start]
};