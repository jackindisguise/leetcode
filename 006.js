/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length==1) return s;
    if(numRows==1) return s;
	let seq = [];
    for(let j=0;j<s.length;j++){
        let row = j%((numRows*2)-2)
        if(row>=numRows) row=numRows-(row-numRows)-2;
        if(seq[row]) seq[row] += s[j];
        else seq[row]=s[j];
    }

	return seq.join("");
};