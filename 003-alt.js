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
		const seq = []; // arrays are cheaper than maps
        let j=i;
		for(j;j<s.length;j++){
			if(seq.indexOf(s[j]) !== -1) break;
			seq.push(s[j]);
		}

		if(seq.length > longest) longest = seq.length;
	}

    return longest;
};