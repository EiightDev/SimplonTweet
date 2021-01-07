const express = require("express"),
  router = express.Router(),
  userController = require("../controllers/user"),
  postController = require("../controllers/post"),
  auth = require("../middleware/auth");

router.get("/user/getAll", userController.getAll);
router.post("/user/login", userController.login);
router.post("/user/register", userController.register);
router.patch("/user/update", auth , userController.update);
router.delete("/user/delete", userController.desactivate);

router.get("/post/getAll", postController.getAll);
router.get("/post/:idUser", postController.getByUser);
router.patch("/post/update", postController.update);
router.delete("/post/delete", postController.delete);
router.post("/post/add", postController.add);

module.exports = router;
