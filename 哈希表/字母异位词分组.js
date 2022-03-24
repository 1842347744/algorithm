// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

// 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次

// 示例 :
// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let map = new Map();
    for(let str of strs) {
        // 取到key
        let sortStr = str.split('').sort().join('');
        if(map.has(sortStr)){
            let arr = map.get(sortStr);
            map.set(sortStr, arr.concat(str))
        } else {
            map.set(sortStr, [str])
        }
    }
    return Array.from(map.values()) 
};