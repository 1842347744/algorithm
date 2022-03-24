// 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。
// 在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。

/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    let map = new Map();
    let cnt = 0;
    let center = 0;
    // 将每个字符及其出现的数量存入map
    for(let n of s){
        map.set(n,map.has(n)?map.get(n)+1:1)
    }
    // 字符数量为偶数直接相加，为奇数则相加后减一。 如果存在奇数，则可以增加中心字符，该字符只能为一个
    for(let [k,v] of map){
        if (v%2==0) {
            cnt += v
        } else {
            cnt += v-1
            center = 1
        }
    }
    return cnt+center
};