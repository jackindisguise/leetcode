/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let map = {};
    for(let pos in nums){
        if(map[target-nums[pos]] !== undefined) return [pos, map[target-nums[pos]]]
        map[nums[pos]] = pos;
    }
};