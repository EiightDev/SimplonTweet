const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // nom de la table
  const post = sequelize.define("posts", {
      // chaque champ est définie dans cet objet
    id_posts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_users: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references : {
        model: 'users',
        key: 'id_users'
      }
    },
    content_posts: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    like_posts: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      asssociate: (models) => {
        models.Post.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return post; //On retourne le model de la table
};
