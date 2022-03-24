/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    let ruleMap = new Map([
        [2, ['a', 'b', 'c' ]],
        [3, ['d', 'e', 'f' ]],
        [4, ['g', 'h', 'i' ]],
        [5, ['j', 'k', 'l' ]],
        [6, ['m', 'n', 'o' ]],
        [7, ['p', 'q', 'r', 's' ]],
        [8, ['t', 'u', 'v' ]],
        [9, ['w', 'x', 'y', 'z' ]]
    ]);
    let digitsArr = digits.split(','),digitsRuleArr=[];
    for(let digit of digitsArr) {
        digitsRuleArr.push(ruleMap.get(digit)) 
    }
    


}