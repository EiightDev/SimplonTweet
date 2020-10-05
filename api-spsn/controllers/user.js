const bcrypt = require('bcrypt');

exports.init = function (bdd) {
    return {
        getAll: function(req, res) {
            bdd.query('SELECT * FROM users', function(err, result, fields) {
                if (!err)
                    res.send(result);
                else
                    res.send(err);
            })
        },
        login: function(req, res) {
            bdd.query('SELECT * FROM users WHERE mail_users = ?', [req.body.mail],
            function (err, users, fields) {
                console.log(users);
                if (!err) {
                    bcrypt.compare(req.body.password, users[0].password_users, function(err, result) {
                        if(result)
                            res.send(users)
                        else
                            res.send('Le mots de passe ne correspond pas.');
                    });
                }
                else
                    res.send(err);
            })
        },
        register: function(req, res) {
            bcrypt.hash(req.body.password, 10, function(err, hash) {
                if (!err) {
                    bdd.query('INSERT INTO `users` (`id_users`, `nom_users`, `prenom_users`, `pseudo_users`, `mail_users`, `password_users`) VALUES (NULL, ?, ?, ?, ?, ?)',
                    [req.body.nom, req.body.prenom, req.body.pseudo, req.body.mail, hash],
                    function(err, result, fields) {
                        if (!err)
                            res.send(result);
                        else
                            res.send(err);
                    })
                }
            });
        }
    }
}
