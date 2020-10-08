const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // nom de la table
  const post = sequelize.define("post", {
      // chaque champ est définie dans cet objet
    id_post: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content_post: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_post: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  return user; //On retourne le model de la table
};
