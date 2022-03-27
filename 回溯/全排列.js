// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let res = [];
    let path = [];
    const len = nums.length;
    let used = new Array(len).fill(false)
    fn(len,used)
    function fn(len,used) {
        console.log('执行递归 ------- fn');
        if(len === path.length) {
            res.push([...path])
            return
        }
        for(let i = 0; i< len; i++) {
            if(!used[i]) {
                path.push(nums[i])
                used[i] = true
                fn(len,used)
                path.pop()
                used[i] = false
            }
        }
    }
    return res
};

console.log(permute([1,2,3])); 

