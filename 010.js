/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    return (new RegExp("^"+p+"$")).exec(s) ? true : false;
};