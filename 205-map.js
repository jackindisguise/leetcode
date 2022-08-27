/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
	if(s.length != t.length) return false;
	  let ss = {};
	  let tt = {};
	  let _s = 0;
	  let _t = 0;
	  for(let i=0;i<s.length;i++){
		  if(ss[s[i]] === undefined) ss[s[i]] = _s++;
		  if(tt[t[i]] === undefined) tt[t[i]] = _t++;
		  if(ss[s[i]] !== tt[t[i]]) return false;
	  }
	  return true;
  };