/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let rule = /^\s*([\-+])?(\d+)/;
    let result = rule.exec(s);
    if(!result) return 0;
    let factor = result[1] === "-" ? -1 : 1;
    let number = result[2];
    return Math.max(Math.min(new Number(number)*factor, 2147483647), -2147483648);
};