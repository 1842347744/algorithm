// 给定一个 N 叉树，找到其最大深度。

// 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

// N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root) {
    let num = 0, max = 0;
    function getMaxDeep(root, num) {
        if(root) {
            num += 1
            max = Math.max(max , num)
            if(root.children) {
                for(let item of (root.children)) {
                    getMaxDeep(item, num)
                }
            }
        }
    }
    getMaxDeep(root, num)
    return max
};