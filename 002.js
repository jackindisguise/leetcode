// recursive addition on a ListNode
function add2ll(ll,val){
    let c = ll;
    c.val += val;
    while(c.val>=10){
        c.val-=10;
        if(c.next) add2ll(c.next, 1);
        else c.next = new ListNode(1);
    }

    return c;
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let s = l1; // save starting position
    while(l2){ // while we have positions to read
        add2ll(l1, l2.val);
        if(!l2.next) break;
        l2 = l2.next;
        if(!l1.next) l1.next = new ListNode(0); // prepare next node (if necessary)
        l1 = l1.next; // move to next node
    }

    return s; // return starting node
}