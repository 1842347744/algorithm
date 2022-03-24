// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar = function(s) {
    if(!s) return ' ';
    let map = new Map();
    for(let i of s) {
        map.set(i, map.has(i)? map.get(i)+1 : 1);
    }
    for(let item of map) {
        if (item[1] === 1){
            return item[0]
        }
    }
};