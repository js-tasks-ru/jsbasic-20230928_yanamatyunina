function ucFirst(str) {
  if(str.length>1) {
    return str[0].toUpperCase()+str.slice(1);
  } else if(str.length==1){
    return str[0].toUpperCase();
  }
  return str;
}
