exports.init = function (bdd) {
    const express = require('express'),
    router = express.Router(),
    userController = require('../controllers/user').init(bdd),
    middleware = require('../middleware/auth')();
    
    router.get('/getUsers', userController.getAll);
    router.post('/signin', middleware.auth, userController.login);
    router.post('/register', userController.register)

    // router.get('/getAvatar', userController.getAvatar);
    // router.get('/getContent', userController.getContent);
    // router.get('/getFollow', userController.getFollow);


    return router;
}