const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // nom de la table
  const user = sequelize.define("users", {
      // chaque champ est définie dans cet objet
    id_users: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_users: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom_users: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pseudo_users: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    mail_users: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      isEmail: true,
    },
    password_users: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return user; //On retourne le model de la table
};
