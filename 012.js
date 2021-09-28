const ROMAN_BREAKPOINTS = {
    "M":1000,
    "CM":900,
    "D":500,
    "CD":400,
    "C":100,
    "XC":90,
    "L":50,
    "XL":40,
    "X":10,
    "IX":9,
    "V":5,
    "IV":4,
    "I":1
};

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let s = "";
    for(let point in ROMAN_BREAKPOINTS){
        let n = ROMAN_BREAKPOINTS[point];
		if(num<n) continue;
        s += point.repeat(Math.floor(num/n));
        num = num%n;
    }

    return s;
};