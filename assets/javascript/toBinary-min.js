function stringToBinary(n,r){function t(n){return"00000000".slice(String(n).length)+n}return n.replace(/[\s\S]/g,function(n){return n=t(n.charCodeAt().toString(2)),0==r?n:n+" "})}