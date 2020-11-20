const { DataTypes } = require("sequelize");

const sequelize = require("./setup");
// nom de la table
const postModel = sequelize.define("posts", {
  // chaque champ est définie dans cet objet
  id_posts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  content_posts: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  like_posts: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
module.exports = postModel;
