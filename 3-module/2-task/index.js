function filterRange(arr, a, b) {
  let res = new Array();
  for(let i=0 ; i<arr.length ; i++) {
    if(arr[i]>=a && arr[i]<=b) {
      res.push(arr[i]);
    }
  }
  return res;
}
