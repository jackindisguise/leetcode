
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i=0;
    let j=0;
    let sum = nums1.length + nums2.length;

    // stupid cases
    if(sum===1) {
        if(nums1.length) return nums1[0];
        else return nums2[0];
    } else if(sum===0){
        return 0;
    }

    let middle = Math.ceil(sum/2);
    let saved = 0;
    for(let c=0;c<middle;c++){
        if(nums1[i] < nums2[j] || j >= nums2.length){ // we can't iterate nums2 anymore, get rest from nums1
            saved = nums1[i];
            i++;
        } else {
            saved = nums2[j];
            j++;
        }
        console.log(saved);
    }

    // average median numbers when even
    if(sum%2==0){
        if(nums1[i] < nums2[j] || j >= nums2.length){
            saved = (saved+nums1[i])/2;
        } else {
            saved = (saved+nums2[j])/2;
        }
    }

    // division by 0 error here
    return isNaN(saved) ? 0 : saved;
};
