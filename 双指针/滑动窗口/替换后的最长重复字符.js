
// 给你一个字符串 s 和一个整数 k 。你可以选择字符串中的任一字符，并将其更改为任何其他大写英文字符。该操作最多可执行 k 次。

// 在执行上述操作后，返回包含相同字母的最长子字符串的长度。

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    let left =0, right = 0, maxCharNum = 0;
    let charArr = new Array(26).fill(0);
    // 终止条件： 滑动窗口右指针到达 s 的最后一位
    while(right<s.length ) {
        let index = s[right].charCodeAt() - 'A'.charCodeAt()
        charArr[index]++;
        maxCharNum = Math.max(maxCharNum, charArr[index])
        // 滑动窗口 左指针右移条件：滑块中出现次数最多的字符的次数 +K 都比 滑块长度 小
        if(maxCharNum +k < right -left +1) {
            let deleteIndex = s[left].charCodeAt() - 'A'.charCodeAt()
            charArr[deleteIndex]--; // 右移，滑块对左指针的记录次数减一 
            left++
        }
        right++
    }
    return right - left
};
console.log(characterReplacement("AABABBA",1));

var characterReplacement = function(s, k) {
    const num = new Array(26).fill(0);
    const n = s.length;
    let maxn = 0, left = 0, right = 0;

    while (right < n) {
        num[s[right].charCodeAt() - 'A'.charCodeAt()]++;
        maxn = Math.max(maxn, num[s[right].charCodeAt() - 'A'.charCodeAt()])
        if (right - left + 1 - maxn > k) {
            num[s[left].charCodeAt() - 'A'.charCodeAt()]--;
            left++;
        }
        right++;
    }
    return right - left;
};