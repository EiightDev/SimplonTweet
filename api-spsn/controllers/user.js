const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.init = function (bdd) {
  return {
    getAll: function (req, res) {
      bdd.query("SELECT * FROM users", function (err, result, fields) {
        if (!err) res.send(result);
        else res.send(err);
      });
    },
    login: function (req, res) {
      bdd.models.User.findOne({ where: { pseudo_users: req.body.pseudo } })
        .then((user) => {
          bcrypt.compare(req.body.password, user.password_users, function (
            err,
            result
          ) {
            if (result) {
              let token = jwt.sign(
                { id_user: user.id },
                process.env.SECRET_KEY,
                { expiresIn: "7d" }
              );
              res.status(200).json(token);
            } else res.status(400).json("password do not match");
          });
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    },
    register: function (req, res) {
      bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (!err) {
          bdd.models.User.create({
            id_users: null,
            nom_users: req.body.nom,
            prenom_users: req.body.prenom,
            pseudo_users: req.body.pseudo,
            mail_users: req.body.mail,
            password_users: hash,
          })
            .then((user) => {
              res.status(200).json(user);
            })
            .catch((err) => {
              res.status(400).json(err);
            });
          }
      });
    },
  };
};
