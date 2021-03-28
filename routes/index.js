const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/user", UserController.post);
router.get("/users", UserController.get);
router.put("/user/:id", UserController.put);
router.delete("/user/:id", UserController.delete);
router.get("/user/:id", UserController.findId);

module.exports = router;
