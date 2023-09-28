function isEmpty(obj) {
  let i=0;
  for(let key in obj) {
    i++;
  }
  return i==0 ? true : false;
}
