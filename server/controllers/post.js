const models = require("../models/models");

exports.getAll = function (req, res) {
  models.Post.findAll()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};
exports.getByUser = function (req, res) {
  models.Post.findAll({where:{ownerIdUser: req.params.idUser}})
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

exports.add = function (req, res) {
  models.Post.create({
    content: req.body.content,
    ownerIdUser: req.body.id_author,
  })
    .then((result) => res.send(result + "- Votre post à bien été créé ! -"))
    .catch((err) => res.send(err));
};

exports.update = function (req, res) {
  models.Post.update(
    {
      content: req.body.content,
    },
    {
      where: { id_post: req.body.id },
    }
  )
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

exports.delete = function (req, res) {
  models.Post.destroy({
    where: { id_post: req.body.id },
  })
    .then((result) =>
      res.send(result + ` - Le post ${req.body.id} à bien été suprimmé`)
    )
    .catch((err) => res.send(err));
};
