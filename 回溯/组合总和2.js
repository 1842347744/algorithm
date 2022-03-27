// 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用 一次 。

// 注意：解集不能包含重复的组合。

// 示例 1:

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 输出:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    let sum = 0 ,start = 0,path = [], res =[];
    candidates = candidates.sort()
    backTracking(start, sum)
    function backTracking(start, sum) {
        if(sum === target) {
            res.push([...path])            
            return;
        }
        for(let i = start; i < candidates.length; i++) {
            const num = candidates[i];
            if(num + sum <= target) {
                path.push(num);
                sum+=num;
                backTracking(i+1, sum);
                path.pop();
                sum-=num
            }
            while(i < candidates.length  && candidates[i] === candidates[i + 1]) {
                i++;
            }
        }
    }
    return res;
};


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    let sum = 0 ,start = 0,path = [], res =[];
    candidates = candidates.sort();
    let used = new Array(candidates.length).fill(false)
    backTracking(start, sum, used)
    function backTracking(start, sum,used) {
        if(sum > target) {
            return
        }
        if(sum === target) {
            res.push([...path])            
            return;
        }
        for(let i = start; i < candidates.length; i++) {
            const num = candidates[i];
            if (i > 0 && candidates[i] == candidates[i - 1] && used[i - 1] == false) {
                continue;
            }
            path.push(num);
            sum+=num;
            used[i] = true
            backTracking(i+1, sum,used);
            path.pop();
            sum-=num;
            used[i] = false
        }
    }
    return res;
};

