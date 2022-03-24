// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）

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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(root === null) return [];
    let qRoot = [root], arr=[];
    while(qRoot.length) {
        const currentLevelSize = qRoot.length
        let itemArr = []
        for(let i = 1; i <= currentLevelSize; ++i) {
            let node = qRoot.shift();
            if(node.left) {
                qRoot.push(node.left)
            }
            if(node.right) {
                qRoot.push(node.right)
            }
            itemArr.push(node.val)
        }
        arr.push(itemArr)
    }
    return arr;
};