const user = require("../models/user");

exports.init = (bdd) => {
  return {
    getAll: function (req, res) {
      bdd.models.Post.findAll()
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
    },
    update: function (req, res) {
      bdd.models.Post.update({
        content_post: req.body.content,
      },
      {
        where : {id_post: req.body.id}
      }        
      ).then((result) => res.send(result))
      .catch((err) => res.send(err));
    }
  };
};
