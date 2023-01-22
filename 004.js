
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i=0; // tracks searching through nums1
    let j=0; // tracks searching through nums2
    let sum = nums1.length + nums2.length; // get total length of potential combined array

    // stupid cases
    if(sum===1) {
        if(nums1.length) return nums1[0];
        else return nums2[0];
    } else if(sum===0){
        return 0;
    }

    // find the middle position of the theoretically combined array
    let middle = Math.ceil(sum/2);
    let saved = 0;
    for(let c=0;c<middle;c++){ // iterate up to the middle
        // if nums1's next element is lower than nums2's next element, use nums1 as next number
        // if we can't search through nums2 anymore, default to nums1 anyway
        if(nums1[i] < nums2[j] || j >= nums2.length){
            saved = nums1[i];
            i++;

        // if we're here, nums2 has more numbers to read
        // or nums1's next number (if it has any) was higher
        } else {
            saved = nums2[j];
            j++;
        }
    }

    // at this point, we are at the middle of the theoretically combined array
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