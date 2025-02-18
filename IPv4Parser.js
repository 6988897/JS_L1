function ipv4Parser(ip, mask){
    const ipParts = ip.split('.').map(Number);
     const maskParts = mask.split('.').map(Number);
   
      const networkBlock = [];
     for (let i = 0; i < 4; i++) {
         networkBlock.push(ipParts[i] & maskParts[i]);
     }
   
     const hostId = [];
     for (let i = 0; i < 4; i++) {
         const invertedMask = 255 - maskParts[i];
 
         const hostPart = ipParts[i] & invertedMask;
         hostId.push(hostPart);
     }
     return [networkBlock.join('.'), hostId.join('.')];
 }