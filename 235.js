/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let c = root;
    while(c){
        if(p.val <= c.val && q.val >= c.val) return c;
        if(q.val <= c.val && p.val >= c.val) return c;
        if(p.val < c.val) c = c.left;
        else if(p.val > c.val) c = c.right;
    }
};