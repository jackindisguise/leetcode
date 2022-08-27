const COMPLEMENT = {
    ")": "(",
    "}": "{",
    "]": "["
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let brackets = [];
    for(let i=0;i<s.length;i++){
        let ch = s[i];
        if(ch === "}" || ch === ")" || ch === "]") {
            if(brackets.pop() !== COMPLEMENT[ch]) return false;
        } else brackets.push(ch);
    }

    if(brackets.length) return false;
    return true;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let brackets = [];
    let width = n*2; // number of characters
    let start = "1";
    for(let i=0;i<width-1;i++) start += "0";
    let decStart = parseInt(start, 2);
    let decEnd = parseInt(start+"0", 2);
    for(let i=decStart;i<decEnd;i++){
        let bin = (i).toString(2);
        let safe = "";
        for(let j=0;j<bin.length;j++){
            if(bin[j]==="1") safe += "(";
            else safe += ")";
        }
        if(isValid(safe)) brackets.push(safe);
    }

    return brackets;
};

