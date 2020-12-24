const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const models = require("../models/models");

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;

exports.getAll = function (req, res) {
  models.User.findAll()
    .then((result) => res.send(result))
    .catch((err) =>
      res.send("Vous ne pouvez pas récupérer d'utilisateur " + err)
    );
};

exports.login = function (req, res) {
  if (req.body.pseudo == null || req.body.password == null) {
    res.status(400).json("il manque des paramètres");
  } else if (req.body.pseudo > 16 || req.body.pseudo < 3) {
    res
      .status(400)
      .json("le pseudo n'est pas au bon format(entre 3 et 16 charactéres ");
  } else {
    models.User.findOne({ where: { username: req.body.pseudo } })
      .then((user) => {
        bcrypt.compare(
          req.body.password,
          user.password,
          function (err, result) {
            if (result) {
              let token = jwt.sign(
                { id_user: user.id },
                process.env.SECRET_KEY,
                { expiresIn: "7d" }
              );
              res.status(200).json(token);
            } else
              res.status(400).json("Les mots de passes ne correspondent pas");
          }
        );
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }
};

exports.register = function (req, res) {
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (!err) {
      models.User.create({
        last_name: req.body.nom,
        first_name: req.body.prenom,
        username: req.body.pseudo,
        mail: req.body.mail,
        password: hash,
      })
        .then((user) => {
          res
            .status(200)
            .send(`Le profil de ${req.body.pseudo} à bien été créé`);
        })
        .catch((err) => {
          res
            .status(400)
            .json(`Nous n'avons pas pu créer l'utilisateur -- ${err}`);
        });
    } else {
      res.send("Il y a eu une erreur de hash du mot de passe");
    }
  });
};

exports.update = function (req, res) {
  console.log(req.body);
  models.User.findOne({
    where: {
      id_user: req.body.id,
    },
  })
    .then(() =>
      models.User.update(
        {
          last_name: req.body.nom,
          first_name: req.body.prenom,
          username: req.body.pseudo,
          mail: req.body.mail,
        },
        {
          where: {
            id_user: req.body.id,
          },
        }
      )
        .then((result) => res.status(200).send(result))
        .catch((err) => res.send(`La mise à jour n'a pas été faite -- ${err}`))
    )
    .catch((err) => res.send(`Cet utilisateur n'existe pas ou plus -- ${err}`));
};

exports.desactivate = function (req, res) {
  models.User.update().then().catch();
};
