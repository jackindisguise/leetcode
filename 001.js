/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // map numbers we've seen to their position in the array
    // the purpose here is that if we have number X, we know target-X=Y.
    // that means if we find Y later in the provided numbers,
    // we know which 2 numbers to add and where they are.
    let map = {};
    for(let pos in nums){
        if(map[target-nums[pos]] !== undefined) return [pos, map[target-nums[pos]]]
        map[nums[pos]] = pos;
    }
};