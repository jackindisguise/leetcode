/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    while(start <= end){
        const c = start+Math.floor((end-start)/2);
        const num = nums[c];
        if(num===target) return c;
        if(target > num) start = c+1;
        else if(target < num) end = c-1;
    }

    return -1;
};