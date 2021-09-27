/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let biggest=0;
    let left=0;
    let right = height.length-1;
    while(left<right){
        let lowest = Math.min(height[left],height[right]);
        biggest = Math.max(((right-left)*lowest), biggest);
        if(height[left]===lowest)left++;
        else right--;
    }

    return biggest;
};