exports.init = (bdd) => {
    return {
      list: function (req, res) {
        bdd.models.Post.findAll()
          .then((result) => res.send(result))
          .catch((err) => res.send(err));
      },
      count: function (req, res) {
        bdd.models.Post.findAll()
          .then((result) => res.send(result))
          .catch((err) => res.send(err));
      },
      follow: function (req, res) {
        bdd.models.Post.findAll()
          .then((result) => res.send(result))
          .catch((err) => res.send(err));
      },
      unfollow: function (req, res) {
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