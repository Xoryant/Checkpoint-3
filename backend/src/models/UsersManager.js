const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.connection.query(`insert into ${this.table} SET ?`, [users]);
  }

  update(users) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      users,
      users.id,
    ]);
  }

  findByEmail(email) {
    return this.connection.query(`SELECT * FROM ${this.table} WHERE email=?`, [
      email,
    ]);
  }
}

module.exports = UsersManager;
