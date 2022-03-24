// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素

// 异或运算符
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let temp = 0;
    for(let i of nums) {
        temp = temp ^ i
    }
    return temp
};

// 哈希表
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let map = new Map();
    for(let num of nums) {
        map.has(num)? map.set(num,map.get(num) + 1) :  map.set(num,1) ;
    }
    for(let [key, value]  of map) {
        if (value ===1) return key
    }
};

