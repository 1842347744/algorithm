/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 递归
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    let res = [];
    function inOrder(node){
        if(!node) return
        inOrder(node.left)
        inOrder(node.right)
        res.push(node.val)
    }
    inOrder(root)
    return res
};

// 迭代

// 其实后序遍历和前序遍历是相反的,所以可以将前序遍历的结果倒序排列就能得到结果了

var postorderTraversal = function(root) {
    let arr = [], q= [root];
    while(q.length) {
        const node = q.pop();
        if( node && node.left){
            q.push(node.left);
        } 
        if(node && node.right){
            q.push(node.right);
        } 
        node && arr.push(node.val)
    }
    return arr.reverse();
};