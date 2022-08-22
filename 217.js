/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let cheat = new Uint32Array(nums);
    cheat.sort();
    for(let i=0;i<cheat.length-1;i++){
        if(cheat[i] === cheat[i+1]) return true;
    }
    return false;
};