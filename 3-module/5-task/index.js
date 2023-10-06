function getMinMax(str) {
  let arr = str.split(' ');
  let min,max;
  let arr2 = arr.filter(item => isFinite(item));
  min = arr2[0];
  max = min;
  for (i = 1; i < arr2.length; ++i) {
      if (+arr2[i] > +max) max = +arr2[i];
      if (+arr2[i] < +min) min = +arr2[i];
  }

  let result = {min: min,
    max: max};
  return result;

}