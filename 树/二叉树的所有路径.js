// 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

// 叶子节点 是指没有子节点的节点。

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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    let paths = [];
    function constructPath(root, path) {
        if(root) {
            path += root.val.toString();
            if(root.left === null && root.right === null) {
                 // 当前节点是叶子节点,结束递归
                paths.push(path)
            } else {
                path += "->"; // 当前节点不是叶子节点，继续递归遍历
                constructPath(root.left, path);
                constructPath(root.right, path);
            }
        }
    };
    constructPath(root, '')
    return paths;
};