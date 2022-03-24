
// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(root === null) return [];
    let q = [root], right = true;
    let arr = [];
    while(q.length) {
        const qSize = q.length;
        let childArr = [];
        for(let i= 0; i < qSize;i++){
            let node = q.shift();
            if (right) {
                childArr.push(node.val)
            } else {
                childArr.unshift(node.val)
            }
            node.left && q.push(node.left)
            node.right && q.push(node.right)
         }
        right = !right;
        arr.push(childArr);
    }
    return arr;
};