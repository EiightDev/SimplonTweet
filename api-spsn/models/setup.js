const Sequelize = require("sequelize");

//Connexion à la base de données
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: "mysql"
  }
);

// appel du models dans user auquel on insere un parametre de connexion à la base
let user = require("./user")(sequelize);

const models = {
  User: user,
};

exports.sequelize = sequelize;
exports.models = models;
