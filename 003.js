/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0; // track the length of the longest substring so far
	for(let i=0;i<s.length-longest;i++){ // look for the longest substring
        // but stop searching once we can't find a longer one
        // (if we're looking starting at position 6 and we have a substring
        // that's 5 characters long in an 8 character long string, we aren't
        // finding a longer one.)
    	const map = {}; // simple map of characters starting at i
        let j=i;
		for(j;j<s.length;j++){
            if(map[s[j]] === undefined) map[s[j]] = j;
            else break;
		}

		if(j-i > longest) longest = j-i;
	}

    return longest;
};