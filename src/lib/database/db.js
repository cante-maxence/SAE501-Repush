const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const db = new sqlite3.Database("MontresDB.db");
const createTablesSQL = fs.readFileSync("create_tables.sql", "utf-8");

db.exec(createTablesSQL, (err) => {
  if (err) {
    console.error("Erreur lors de la création des tables :", err.message);
  } else {
    console.log("Tables créées avec succès.");
    const insertDataSQL = fs.readFileSync("insert_data.sql", "utf-8");
    db.exec(insertDataSQL, (err) => {
      if (err) {
        console.error("Erreur lors de l'insertion de données :", err.message);
      } else {
        console.log("Données insérées avec succès.");
      }

      db.close();
    });
  }
});
