/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let joined = new Float64Array(nums1.concat(nums2));
    joined.sort();
    let middle = Math.floor(joined.length/2);
    if(joined.length%2) return joined[middle];
    return (joined[middle-1] + joined[middle]) / 2
};