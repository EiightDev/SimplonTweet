exports.init = function (bdd) {
    const express = require('express'),
    router = express.Router(),

    userController = require('../controllers/user').init(bdd),
    postController = require('../controllers/post').init(bdd),
    middleware = require('../middleware/auth')();
    
    router.get('user/getAll', userController.getAll);
    router.post('user/signin', userController.login);
    router.post('user/register', userController.register)
    router.put('user/update', userController.update)
    router.delete('user/delete', userController.desactivate)

    router.get('/post/getAll', postController.getAll)
    router.put('/post/update', postController.update)

    return router;
}