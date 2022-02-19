

class usersManager{

  getAll(){
    const users = client.query("SELECT * FROM Users;");
    newUsers = users.map((user) => new User(user));
    client.end();
    return newUsers;
  }

  getByCriteria(criteria={}){
    const users = client.query("SELECT * FROM Users ;");
    newUsers = users.map((user) => new User(user));
    client.end();
    return newUsers;
  }

  getUsersAgeGreaterThanOrderBy(age, ordering){
    const users = client.query(`SELECT * FROM Users WHERE age > ${age} ORDER BY ${ordering};`);
    newUsers = users.map((user) => new User(user));
    client.end();
    return newUsers;
  }


}