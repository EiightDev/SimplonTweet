const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const models = require("../models/models");

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;

exports.getAll = function (req, res) {
  models.User.findAll()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

exports.login = function (req, res) {
  res.send("C'est un retour");
  // if (req.body.pseudo == null || req.body.password == null) {
  //   res.status(400).json("il manque des paramètres");
  // } else if (req.body.pseudo > 16 || req.body.pseudo < 3) {
  //   res
  //     .status(400)
  //     .json("le pseudo n'est pas au bon format(entre 3 et 16 charactéres ");
  // } else {
  //   bdd.models.User.findOne({ where: { pseudo_users: req.body.pseudo } })
  //     .then((user) => {
  //       bcrypt.compare(req.body.password, user.password_users, function (
  //         err,
  //         result
  //       ) {
  //         if (result) {
  //           let token = jwt.sign(
  //             { id_user: user.id },
  //             process.env.SECRET_KEY,
  //             { expiresIn: "7d" }
  //           );
  //           res.status(200).json(token);
  //         } else res.status(400).json("password do not match");
  //       });
  //     })
  //     .catch((err) => {
  //       res.status(400).json(err);
  //     });
  // }
};

exports.register = function (req, res) {
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (!err) {
      console.warn('la requéte est en place');
      models.User.create({
        nom_users: req.body.nom,
        id_users: null,
        prenom_users: req.body.prenom,
        pseudo_users: req.body.pseudo,
        mail_users: req.body.mail,
        password_users: hash,
      })
        .then((user) => {
          res.status(200).json(user);
          res.send(`Le profil de ${req.body.pseudo} à bien été créé`);
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    } else {
      res.send("Il y a eu une erreur de hash du mot de passe");
    }
  });
};

exports.update = function (req, res) {
  console.log(req.body);
  models.User.update(
    {
      nom_users: req.body.nom,
      prenom_users: req.body.prenom,
      pseudo_users: req.body.pseudo,
      mail_users: req.body.mail,
    },
    {
      where: {
        id_users: req.body.id,
      },
    }
  )
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

exports.desactivate = function (req, res) {
  models.User.update().then().catch();
};
