/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	// stupid cases
    if(s.length==1) return s;
    if(numRows==1) return s;

	// generate the zigzag pattern
	let seq = [];
    for(let j=0;j<s.length;j++){
        let row = j%((numRows*2)-2) // where in this zigzag sequence does this letter appear
        if(row>=numRows) row=numRows-(row-numRows)-2; // we're in the zig part
        if(seq[row]) seq[row] += s[j]; // add this letter to its respective row
        else seq[row]=s[j]; // we haven't seen this row yet, generate it
    }

	// join all rows into 1 line
	return seq.join("");
};