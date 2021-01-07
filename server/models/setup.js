const Sequelize = require("sequelize");

//Connexion à la base de données
const bdd = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

bdd
  .authenticate()
  .then((_) =>
    console.log("-- La connexion à la base de données a bien été établie. --")
  )
  .catch((error) =>
    console.error(
      `!! Impossible de se connecter à la base de données -- ${error} !!`
    )
  );

module.exports = bdd;
