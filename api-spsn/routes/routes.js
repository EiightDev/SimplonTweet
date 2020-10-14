exports.init = function (bdd) {
    const express = require('express'),
    router = express.Router(),

    userController = require('../controllers/user').init(bdd),
    postController = require('../controllers/post').init(bdd),
    middleware = require('../middleware/auth')();
    
    router.get('user/getAll', middleware.auth, userController.getAll);
    router.post('user/signin', middleware.auth, userController.login);
    router.post('user/register', userController.register)
    router.put('user/update', userController.update)
    router.delete('user/delete', userController.delete)

    router.get('/post/getAll', postController.getAll)
    router.put('/post/update', postController.update)

    // router.get('/getAvatar', userController.getAvatar);
    // router.get('/getContent', userController.getContent);
    // router.get('/getFollow', userController.getFollow);

    return router;
}