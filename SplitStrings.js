const solution = (str) => {
    const res = [];
    const NStr = str.length % 2 !== 0 ? str + '_' : str;
    
    for (let i = 0; i < NStr.length; i += 2) {
      res.push(NStr.slice(i, i + 2));
    }
    
    return res;
  };