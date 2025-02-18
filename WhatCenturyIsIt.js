function whatCentury(year)
{
  let c = Number(year);
  let t = c%100;
  let h = (c-t)/100;
  if(t>0)
    {
      h++;
    } 
  let n = h%10;

  if(Number(h)==11||Number(h)==12||Number(h)==13)
    { 
      h = String(h+"th");
    }
  else { 
  switch(n)
  {
    case 1:
      h = String(h+"st");
      break;
    case 2:
      h = String(h+"nd");
      break;
    case 3:
      h = String(h+"rd");
      break;
    default:
      h = String(h+"th");
  }
}
 
  return h;
}