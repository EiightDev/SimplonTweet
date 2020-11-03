const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // nom de la table
  const follow = sequelize.define(
    "follow",
    {
      // chaque champ est définie dans cet objet
      id_suivi: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id_users",
        },
      },
      id_suiveur: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id_users",
        },
      },
    },
    {
      classMethods: {
        asssociate: (models) => {
          models.follow.belongsTo(models.user, {
            foreignKey: {
              allowNull: false,
            },
          });
        },
      },
    }
  );
  return follow; //On retourne le model de la table
};
