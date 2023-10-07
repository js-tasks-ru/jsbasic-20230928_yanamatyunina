function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  for(let i=0 ; i<friends.length ; i++) {
    let li = document.createElement('li');
    let str='';
    for(let key in friends[i]) {
      str += ' ' +friends[i][key];
    }
    li.innerHTML = str;
    ul.append(li); 
  }
  return ul;
}
