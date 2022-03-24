/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let len = nums.length;
    if(len < 2) return len
    let j = 0;
    for(let i = 1; i< len; i++) {
        if(nums[j] !== nums[i]) {
            j++;
            nums[j] = nums[i]
        }
    }
    return j+1
};