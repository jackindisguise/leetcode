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