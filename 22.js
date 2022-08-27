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
    for(let i=Math.pow(2,n*2-1), end=i*2;i<end;i+=2){
        let parens = dec2paren(i);
        if(isValid(parens)) brackets.push(parens);
    }

    return brackets;
};

function dec2paren(dec){
    return bin2paren((dec).toString(2));
}

function bin2paren(bin){
    let s = "";
    for(let i=0;i<bin.length;i++) s += (bin[i] === "1" ? "(" : ")");
    return s;
}
