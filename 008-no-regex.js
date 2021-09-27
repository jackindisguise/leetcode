const whitespace = ["\t", "\r", "\n", " "];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
	// skip whitespace
	let start = 0;
	for(start; start<s.length; start++) if(!whitespace.includes(s[start])) break;

	// if the first character is + or -, assign appropriate factor
	let factor = 1;
	if(s[start] === "-") {
		factor = -1;
		start++;
	} else if(s[start] === "+"){
		start++;
	}

	// after whitespace and optional +-, everything must be a number
	if(!numbers.includes(s[start])) return 0;

	// start reading numbers
	let end = start;
	for(end; end<s.length; end++) if(!numbers.includes(s[end])) break;

	// copy number
	return Math.max(Math.min(new Number(s.substring(start, end)) * factor, 2147483647), -2147483648);
};