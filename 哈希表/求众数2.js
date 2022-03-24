// 给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。

// 这道题居然是中等难度... 这不是上来直接一套哈希带走了 难度太假了
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var majorityElement = function(nums) {
    let arr = [], map = new Map();
    for(let num of nums) {
        let val = map.has(num)? map.get(num)+1 : 1;
        map.set(num, val);
        if(val > nums.length/3) {
            arr.push(num)
        }
    }
    return [...new Set(arr) ]
};