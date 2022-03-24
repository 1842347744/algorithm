/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    // 1. 求出该数下一次的平方和，判断是否为1，否则插入哈希表
    // 2. 将新数与哈希表中的数字进行比较
    let nowNum = n;
    let numMap = new Map();
    function getNextNum(num) {
        let nextNum = 0;
        while(num/10) {
            nextNum += Math.pow(num % 10, 2) 
            num = Math.floor(num/10)
        }
        return nextNum
    }
    while(nowNum) {
        if(nowNum ===1) {
            return true
        } else {
            nowNum = getNextNum(nowNum);
            if(numMap.has(nowNum)) {
                return false
            } else {
                numMap.set(nowNum, 1)
            }
        }
    }
    return getNextNum(n)
};
