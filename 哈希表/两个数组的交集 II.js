// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    let nums1Map = new Map(), nums2Map = new Map(), arr = []; 
    for(let i= 0 ; i< nums1.length ;i++) {
        nums1Map.set(nums1[i], nums1Map.has(nums1[i])?nums1Map.get(nums1[i])+1: 1)
    }
    for(let i= 0 ; i< nums2.length ;i++) {
        nums2Map.set(nums2[i], nums2Map.has(nums2[i])?nums2Map.get(nums2[i])+1: 1)
    }
    for(let[key ,val] of nums1Map) {
        if(nums2Map.has(key)){
            for(let i = 0; i< Math.min(nums1Map.get(key),nums2Map.get(key)); i++){
                arr.push(key)
            }
        }
    }
    return arr
};