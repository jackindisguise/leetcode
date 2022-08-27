/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(!s) return true;
    let i=0;
    let j=0;
    for(i;i<s.length;i++){
        let f = false;
        for(j;j<t.length;){
            if(t[j++] == s[i]) {
                f = true;
                break;
            }
        }

        if(!f) return false;
    }

    return i === s.length;
};