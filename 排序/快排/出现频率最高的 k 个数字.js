// 给定一个整数数组 nums 和一个整数 k ，请返回其中出现频率前 k 高的元素。可以按 任意顺序 返回答案。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let mapNums = new Map();
    let arr = [];
    for(let i of nums) {
        mapNums.set(i, mapNums.has(i)? mapNums.get(i)+1:1)
    }
    for(let item of mapNums) {
        arr.push(item)
    }
    return arr.sort((a,b) => b[1] - a[1]).slice(0, k).map(a => a[0])
};