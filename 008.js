/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let rule = /^\s*([\-+])?(\d+)/;
    let result = rule.exec(s);
    if(!result) return 0;
    return Math.max(Math.min(new Number(result[2])*(result[1] === "-" ? -1 : 1), 2147483647), -2147483648);
};