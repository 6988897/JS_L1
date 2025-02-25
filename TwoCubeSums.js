function hasTwoCubeSums(n) {
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let result = false;

    for (a = 0; Math.pow(a,3) < n; a++) { 
        for (b = 0; Math.pow(b,3) < n; b++) { 
            if(Math.pow(a,3)+Math.pow(b,3)==n)
                {
                    c=Math.max(a,b)+1;
                    for (c; Math.pow(c,3) < n; c++) 
                        {
                            for (d = 0; Math.pow(d,3) < n; d++) 
                                {
                                    if(Math.pow(c,3)+Math.pow(d,3)==n)
                                        {
                                            result=true;
                                            return result;
                                        }
                                }  
                        } 
                }
          }
      }
      return result;
}


console.log(hasTwoCubeSums(1729)); // true
console.log(hasTwoCubeSums(42));   // false
console.log(hasTwoCubeSums(4104)); // true
console.log(hasTwoCubeSums(13832)); // true
console.log(hasTwoCubeSums(100));   // false