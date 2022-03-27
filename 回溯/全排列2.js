// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

// 示例 1：
// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]


// 示例 2：
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    let path = [], res =[],len = nums.length;
    nums = nums.sort();
    let used = new Array(len).fill(false);
    backTracking(used);
    return res
    function backTracking(used) {
        if(len === path.length) {
            res.push([...path])
            return
        }
        for(let i = 0; i < len; i++ ) {
            if(!used[i]) {
                if (i > 0 && nums[i] == nums[i - 1] && used[i - 1] == false) {
                    continue;
                }
                path.push(nums[i])
                used[i] = true
                backTracking(used)
                used[i] = false
                path.pop()
            }
        }
    }
};