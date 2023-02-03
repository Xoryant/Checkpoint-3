const AbstractManager = require("./AbstractManager");

class ElementalManager extends AbstractManager {
  constructor() {
    super({ table: "elemental" });
  }

  insert(elemental) {
    return this.connection.query(`insert into ${this.table}  set ?`, [
      elemental,
    ]);
  }

  update(elemental) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      elemental,
      elemental.id,
    ]);
  }
}

module.exports = ElementalManager;
