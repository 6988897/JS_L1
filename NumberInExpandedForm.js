function expandedForm(num) {
    const partsNum = String(num).split('');
    
    let res=''
    for(let i = 0; i<partsNum.length; i++)
    {
      if(partsNum[i]==0)continue;
      res+=String(partsNum[i]*(10**(partsNum.length-i-1)))+" + ";
    }
    
    return res.substring(0, res.length-3);
  }