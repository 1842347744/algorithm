/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let rule = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4], 
        ['I', 1]],
     num = 0;
    for(let [key, val] of rule) {
        while(s.indexOf(key) == 0){
            num += val;
            s = s.substr(key.length)
        }
        if(!s.length) break;
    }
    return num
};