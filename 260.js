/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumber = function(nums) {
    let found = [];
    nums.sort();
    for(let i=0;i<nums.length;i+=2){
        if(i===nums.length-1) found.push(nums[i]);
        else if(nums[i]!==nums[i+1]) found.push(nums[i--]);
    }
    return found;
};