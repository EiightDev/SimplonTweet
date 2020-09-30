exports.init = bdd => {
    return {
        getUsers: function(req, res) {
            bdd.query('SELECT * FROM utilisateur', function(err, result, fields) {
                if (!err)
                    res.send(result);
                else
                    res.send(err);
            })
        },
        getAvatar: function(req, res) {
            bdd.query('SELECT * FROM avatar', function(err, result, fields) {
                if (!err)
                    res.send(result);
                else
                    res.send(err);
            })
        },
        getFollow: function(req, res) {
            bdd.query('SELECT * FROM follow', function(err, result, fields) {
                if (!err)
                    res.send(result);
                else
                    res.send(err);
            })
        },    
        getContent: function(req, res) {
            bdd.query(`SELECT * FROM post`, function(err, result, fields) {
                if (!err)
                    res.send(result);
                else
                    res.send(err);
            })
        }    
    }}
