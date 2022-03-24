// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    let res = [];
    const setNum1 = new Set(nums1);
    for(let i =0; i<nums2.length; i++) {
        if(setNum1.has(nums2[i]) && !res.includes(nums2[i])) {
            res.push(nums2[i])
        }
    }
    return res
};