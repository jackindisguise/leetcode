/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = [];
    let current = 1;
    for(let i=0;i<nums.length;i++){
        if(i>0) current *= nums[i-1];
        left.push(current);
    }

    let right = [];
    current = 1;
    for(let i=nums.length-1;i>=0;i--){
        if(i<nums.length-1) current *= nums[i+1];
        right.push(current);
    }
    right.reverse();

    let results = [];
    for(let i=0;i<nums.length;i++){
        results.push(left[i] * right[i]);
    }
    return results;
};