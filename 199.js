/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let feed = [root];
    let safe = [];
    function defeed(){
        let __feed = [];
        for(let i=0;i<feed.length;i++) {
            let node = feed[i];
            if(!node) continue;
            if(i==feed.length-1) safe.push(node.val);
            if(node.left) __feed.push(node.left);
            if(node.right) __feed.push(node.right);
        }
        feed = __feed;
    }

    while(feed.length) defeed();
    return safe;
};