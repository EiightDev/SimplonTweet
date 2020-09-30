exports.init = function (bdd) {
    const express = require('express'),
    router = express.Router(),
    userController = require('../controllers/content').init(bdd);
    console.log('Connexion à la base de données réussie');

    router.get('/getUsers', userController.getUsers);
    router.get('/getAvatar', userController.getAvatar);
    router.get('/getContent', userController.getContent);
    router.get('/getFollow', userController.getFollow);


    return router;
}