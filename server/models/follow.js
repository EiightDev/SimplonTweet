const { DataTypes } = require("sequelize");
const sequelize = require('./setup');

// nom de la table
const followModel = sequelize.define("follow", {
    // chaque champ est définie dans cet objet
  
}, {
    timestamps: true,
    createdAt: false,
    updatedAt: false
  });

module.exports = followModel;
