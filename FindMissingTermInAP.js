function findMissing(list) { 
    let Sn = (list[0]+list[list.length-1])/2*(list.length+1)
    
    let s = 0;
    for (let v of list) {
      s += v;
    }
    return Sn-s;
  }