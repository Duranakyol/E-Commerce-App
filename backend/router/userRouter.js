const router = require("express").Router();
const loginController = require("../controller/userController/loginController");

router.post("/login", loginController);

module.exports = router;
