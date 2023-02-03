const AbstractManager = require("./AbstractManager");

class PersonnagesManager extends AbstractManager {
  constructor() {
    super({ table: "personnages" });
  }

  insert(personnages) {
    return this.connection.query(`insert into ${this.table} SET ?`, [
      personnages,
    ]);
  }

  update(personnages) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      personnages,
      personnages.id,
    ]);
  }
}

module.exports = PersonnagesManager;
