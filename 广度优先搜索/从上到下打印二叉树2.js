
// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
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
    if (root === null) return []
    let arr =[], queue = [root];
    while(queue.length) {
        let qsize = queue.length;
        let tempArr = [];
        for(let i = 0; i< qsize ; i++) {
            let node = queue.shift();
            tempArr.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        arr.push(tempArr)
    }
    return arr;
};