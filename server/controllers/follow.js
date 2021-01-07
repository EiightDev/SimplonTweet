const models = require("../models/models");

exports.list = function (req, res) {
  models.Post.findAll()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

exports.count = function (req, res) {
  models.Post.findAll()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};
exports.follow = function (req, res) {
  models.Post.findAll()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

exports.unfollow = function (req, res) {
  models.Post.update(
    {
      content_post: req.body.content,
    },
    {
      where: { id_post: req.body.id },
    }
  )
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};
