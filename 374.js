/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    if(n===1) return 1;
    let start = 1;
    let mid = Math.floor(start+((n-start)/2));
    while(true){
        const step = guess(mid);
        if(step===0) return mid;
        if(step==-1) n = (n==mid ? mid-1 : mid);
        else if(step==1) start = (start==mid ? mid+1 : mid);
        mid = Math.floor(start+((n-start)/2));        
    }
};