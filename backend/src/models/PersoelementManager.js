const AbstractManager = require("./AbstractManager");

class PersoelementManager extends AbstractManager {
  constructor() {
    super({ table: "persoelement" });
  }

  insert(persoelement) {
    return this.database.query(`insert into ${this.table} values (?)`, [
      persoelement,
    ]);
  }

  update(persoelement) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      persoelement,
    ]);
  }
}

module.exports = PersoelementManager;
