class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int i=0;
        int j=0;
        int n1s = nums1.size();
        int n2s = nums2.size();
        int count = n1s + n2s;

        // stupid cases
        if(count==1){
            if(n1s>0) return nums1[0];
            else if(n2s>0) return nums2[0];
        } else if(count==0){
            return 0;
        }

        int middle = ceil(((double)count)/2);
        double saved = 0;
        for(int c=0;c<middle;c++){
            if(i < n1s && (j >= n2s || nums1[i] <= nums2[j])){
                saved = nums1[i];
                i++;
            } else {
                saved = nums2[j];
                j++;
            }
        }

        if(count%2==0){
            if(i < n1s && (j >= n2s || nums1[i] <= nums2[j])){
                saved = (saved+nums1[i]);
            } else {
                saved = (saved+nums2[j]);
            }

            if(saved == 0) return 0;
            saved /= 2;
        }

        return saved;
    }
};