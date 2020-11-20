const { DataTypes } = require("sequelize");

const sequelize = require('./setup');

 // nom de la table
  const userModel = sequelize.define("users", {
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
 
  module.exports = userModel;
