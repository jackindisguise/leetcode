/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===1) return strs[0]; // stupid case
	// the first element must match with every other element (starting from the beginning), so we don't need to do anything fancy.
	// we can just compare the first element to every other element, wittling down the "matching length" by comparing each element from the back
    let root = strs[0];
    let match = root.length;
    for(let i=1;i<strs.length;i++){
        let str = strs[i];
        match = Math.min(match, str.length); // only start comparison from the end of the known match length so far (unless this string is shorter)
		// starting from the back, if any character doesn't match, that is the new end of the matching length
        for(let j=match-1;j>=0;j--) if(str[j] != root[j]) match=j;
        if(match===0) return ""; // there is no contiguous matching set of characters starting from 0 -- therefore there is no common prefix.
    }

    return root.substring(0,match);
};