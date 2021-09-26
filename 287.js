/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    for(let i=0;i<nums.length;i++){
        for(let j=nums.length-1;j>i;j--){
            if(nums[i]===nums[j]) return nums[i];
        }
    }
};