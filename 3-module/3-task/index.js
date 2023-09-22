function camelize(str) {
  let res='';

  let arr = str.split("");
  while(arr.indexOf('-')>=0) {
    let sym = arr.indexOf("-");
    arr[sym+1] = arr[sym+1].toUpperCase();
    arr.splice(sym,1);

  }
  res = arr.join("");
  return res;

}
