const ROMAN = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let value = 0;
    for(let i=s.length-1;i>=0;i--){
        let currentValue = ROMAN[s[i]];
        let lastValue = i<s.length-1 ? ROMAN[s[i+1]] : 0;
        if(lastValue > currentValue) value -= currentValue;
        else value += currentValue;
    }

    return value;
};