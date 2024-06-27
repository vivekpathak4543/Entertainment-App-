const express = require("express");
const isAuthenticated = require("../middleware/auth.middleware.js");
const {
  userRegister,
  userLogin,
  userLogout,
  userProfile,
  getUserById,
} = require("../controllers/user.controller.js");

// router instances
const userRoute = express.Router();

// user routes
userRoute.post("/user/register", userRegister);
userRoute.post("/user/login", userLogin);
userRoute.get("/user/logout", userLogout);
userRoute.get("/user/profile", isAuthenticated, userProfile);
userRoute.get("/user/:id", isAuthenticated, getUserById);

// exporting
module.exports = userRoute;
