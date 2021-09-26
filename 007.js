/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
	let sign = Math.sign(x);
	x = Math.abs(x);
	let reversed = new Number(new String(x).split("").reverse().join(""))*sign;
    if(Math.abs(reversed)>2147483648) return 0;
    return reversed;
};