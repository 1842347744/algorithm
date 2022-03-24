/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let long = 0;
    const map = new Map(), len = s.length;
    for(let right = 0; right < len; right++){
        // 遇到重复字符时还要判定 该重复字符的上一次出现位置是否在 滑动窗口左边界 left 的右边
        if(map.has(s[right]) && map.get(s[right]) >= left){
            left = map.get(s[right]) + 1; // 都满足，则更新，更新到最近出现的那个重复字符，它的上一个索引的右边
        }
        long = Math.max(long, right - left + 1); // 比较滑动窗口大小与 long 的长度
        map.set(s[right], right); // 无论有没有重复，每次遍历都要更新字符的出现位置
    }
    return long;
};
console.log(lengthOfLongestSubstring("aab")); 
