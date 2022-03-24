/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    let i= 0;
    while(Math.pow(2, i) < n) {
        i++;
    }
    if(Math.pow(2, i) == n) {
        return true
    } else {
        return false
    }
};