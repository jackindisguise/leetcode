/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let joined = new Float64Array(nums1.concat(nums2)); // combine both arrays in Float64Array.
    joined.sort(); // sort automagically
    let middle = Math.floor(joined.length/2); // find middle
    if(joined.length%2) return joined[middle]; // if it's odd, add median value
    return (joined[middle-1] + joined[middle]) / 2; // if it's even, average the 2 values in the middle
};