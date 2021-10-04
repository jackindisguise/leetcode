/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
	for(let i=0;i<s.length;i++){
		let seq = [];
		for(let j=i;j<s.length;j++){
			if(seq.indexOf(s[j]) !== -1) break;
			seq.push(s[j]);
		}

		if(seq.length>longest) longest = seq.length;
	}

    return longest;
};