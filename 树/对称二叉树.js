
// 给你一个二叉树的根节点 root ， 检查它是否轴对称。


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    if(root === null) return true;
    return isMirror(root.left, root.right);
    function isMirror(left, right) {
        // 都无节点
        if(left === null && right === null) {
            return true
        } 
        // 只有一个节点 或者 节点存在但不相等
        if(!left || !right || left.val !== right.val) {
            return false
        }
        // 节点存在 继续递归
        return isMirror(left.left, right.right) && isMirror(left.right, right.left)
    }
};