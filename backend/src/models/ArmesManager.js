const AbstractManager = require("./AbstractManager");

class ArmesManager extends AbstractManager {
  constructor() {
    super({ table: "armes" });
  }

  insert(armes) {
    return this.connection.query(`insert into ${this.table} set ?`, [armes]);
  }

  update(armes) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      armes,
      armes.id,
    ]);
  }
}

module.exports = ArmesManager;
