exports.init = function (bdd) {
    const express = require('express'),
    router = express.Router(),
    userController = require('../controllers/user').init(bdd);
    console.log('Connexion à la base de données réussie');

    router.get('/getUsers', userController.getAll);
    router.post('/signin', userController.login);
    router.post('/register', userController.register)

    // router.get('/getAvatar', userController.getAvatar);
    // router.get('/getContent', userController.getContent);
    // router.get('/getFollow', userController.getFollow);


    return router;
}