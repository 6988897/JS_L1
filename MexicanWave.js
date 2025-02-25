function wave(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) 
    { 
      let s = '';
      for (let j = 0; j < str.length; j++) 
      {
        if (str[i] === ' ')
        {
          continue;
        } 
        else if(i === j) 
        { 
          s += str[j].toUpperCase();
        } else {
          s += str[j].toLowerCase();
        }
      }
      if (str[i] !== ' ') res.push(s);
    }
    return res;
  }