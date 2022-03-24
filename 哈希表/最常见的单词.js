// 给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。

// 题目保证至少有一个词不在禁用列表中，而且答案唯一。

// 禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。


/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
    let paragraphArr =  paragraph.split(/[\!\?\'\,\;\.\ ]/g);
    console.log(paragraphArr);
    let map = new Map(), maxStr='',maxNum = 0;
    for(let item of paragraphArr) {
        item = item.toLowerCase()
        map.set(item, map.has(item)? map.get(item) + 1 : 1 )
    }
    for(let [key, val] of map) {
        if(banned.includes(key)) continue;
        if(key && maxNum < val) {
            maxNum = val
            maxStr = key
        }
    }
    return maxStr
};