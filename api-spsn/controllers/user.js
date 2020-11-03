const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const EMAIL_REGEX     = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX  = /^(?=.*\d).{4,8}$/;

exports.init = (bdd) => {
  return {
    getAll: function (req, res) {
      bdd.models.User.findAll().then((result) => res.send(result)).catch((err) => res.send(err))
    },
    login: function (req, res) {
      if (req.body.pseudo == null || req.body.password == null) {
        res.status(400).json("il manque des paramètres");
      } else if (req.body.pseudo > 16 || req.body.pseudo < 3) {
        res
          .status(400)
          .json("le pseudo n'est pas au bon format(entre 3 et 16 charactéres ");
      } else {
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
      }
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
    update: function (req, res) {
      console.log(req.body);
      bdd.models.User.update({
            nom_users: req.body.nom,
            prenom_users: req.body.prenom,
            pseudo_users: req.body.pseudo,
            mail_users: req.body.mail,
      }, {
        where : {
            id_users: req.body.id
        }
      }).then((result) => res.send(result))
      .catch((err) => res.send(err));
    },
    desactivate: function (req, res) {
      bdd.models.User.update().then().catch()
    }
  };
};