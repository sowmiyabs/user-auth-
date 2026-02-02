const express = require("express");
const {
  register,
  login,
  getUser
} = require("../controllers/authcontrollers.js");
const authMiddleware = require("../middlewares/middleware.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleware, getUser);

module.exports = router;
