function showSalary(users, age) {
  let result = '';
  for(let i=0 ; i<users.length ; i++) {
    let user = users[i];
    
    if(user.age<=age) {
      if(i!=0) {
        result += "\n";
      }
      result += user.name + ", " + user.balance ;
      
    }
      
  }
  return result;
}

