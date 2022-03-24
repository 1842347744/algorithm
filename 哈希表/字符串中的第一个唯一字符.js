// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 

// 数组

// 超出时间限制 ....
/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let sArr = s.split('');
    for (let i = 0; i < sArr.length; i++) {
        if(!sArr.slice(0,i).concat(sArr.slice(i+1)).includes(sArr[i])){
            return i
        }
    }
    return -1
};

// 哈希表1

/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let map = new Map();
    let sArr = s.split('');
    for (let i = 0; i < sArr.length; i++) {
        map.set(sArr[i],map.has(sArr[i]) ? map.get(sArr[i])+1 : 1)
    }
    for (let [key, val] of map) {
        if(val === 1) {
            return sArr.indexOf(key)
        }
    }
    return -1
};

// 数组2
var firstUniqChar = function(s) {
    for(let i in s){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            return i
        }
    }
    return -1;
}