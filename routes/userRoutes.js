const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/createUser", createUser);
router.get("/getAllUsers", getAllUsers);
router.get("/getUserById/:id", getUserById);
router.patch("/updateUserById/:id", updateUserById);
router.delete("/deleteUserById/:id", deleteUserById);

module.exports = router;
