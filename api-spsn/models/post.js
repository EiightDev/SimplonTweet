const { DataTypes } = require("sequelize");
const sequelize = require("./setup");
// nom de la table
const postModel = sequelize.define("post", {
  // chaque champ est définie dans cet objet
  id_post: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  like: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});
module.exports = postModel;
