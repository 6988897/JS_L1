function domainName(url){
    const domain = url.replace(/(https?:\/\/)?(www\.)?/, '');
     const domainName = domain.split('/')[0];
     return domainName.split('.')[0];
   }