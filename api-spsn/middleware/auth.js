const jwt = require('jsonwebtoken');

module.exports = () => {
    return {
        auth: (req, res, next) => {
            let token = req.headers.authorization;
            if (token) {
                token = token.split(' ');
                if (token[0] != 'Bearer')
                    res.status(400).json('you must specify a bearer token')
                else {
                    if (token[1]) {
                        token = token[1];
                        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                            if (err)
                                res.status(403).send(err);
                            else {
                                req.decoded = decoded;
                                next();
                            }
                        });
                    }
                    else
                        res.status(400).json('token missing');
                }
            }
            else
                res.status(400).json('token missing');
        }
    }
}
