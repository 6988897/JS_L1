function bingo(ticket, win){
    let countMiniWin=0;
    const ticketP = new Map();
    
    ticket.forEach(([str,num], i)=>{
      const hasMiniWin=str.split('').some(c=>c.charCodeAt(0)===num);
      ticketP.set(i, hasMiniWin);
    })
    
    for(const v of ticketP.values())
      {
        if(v) countMiniWin++;
      }
    return countMiniWin>=win? 'Winner!':'Loser!'
  }