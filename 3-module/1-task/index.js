function namify(users) {
  let arr = new Array();
  for(let i=0; i<users.length ; i++) {
      arr.push(users[i].name);
      //arr.push(user.name);
  }
  return arr;
}
