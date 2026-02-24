const { createUser, getAllUsers } = require("../controllers/userController");

const router = require("express").Router();

router.post("/createUser", createUser);
router.get("/getAllUsers", getAllUsers);

module.exports = router;
