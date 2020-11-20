const models = require("../models/models");

exports.getAll = function (req, res) {
  models.Post.findAll()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

exports.add = function (req, res) {
  models.Post.create({
    content_posts: req.body.content,
    userIdUsers: req.body.id_author,
  })
    .then((result) => res.send(result + "- Votre post à bien été créé !"))
    .catch((err) => res.send(err));
};

exports.update = function (req, res) {
  models.Post.update(
    {
      content_posts: req.body.content,
    },
    {
      where: { id_posts: req.body.id },
    }
  )
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

exports.delete = function (req, res) {
  models.Post.destroy({
    where: { id_posts: req.body.id },
  })
    .then((result) =>
      res.send(result + ` - Le post ${req.body.id} à bien été suprimmé`)
    )
    .catch((err) => res.send(err));
};
