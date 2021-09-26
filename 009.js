/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    if(x<10) return true;
	let nums = [];
	while(x>=1){
		nums.unshift(Math.floor(x%10));
		x/=10;
	}

	return nums.join("") == nums.reverse().join("");
};