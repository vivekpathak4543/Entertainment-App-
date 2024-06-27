// importing
const express = require("express");
const { isAuthenticated } = require("../middleware/auth.middleware.js");
const {
  checkBookmark,
  addBookmark,
  deleteBookmark,
  getBookmark,
  filterBookmark,
} = require("../controllers/bookmark.controller.js");

// router instances
const bookmarkRoute = express.Router();

//bookmark routes
bookmarkRoute.get("/media/bookmark/check/:id", isAuthenticated, checkBookmark);
bookmarkRoute.post("/media/bookmark/add", isAuthenticated, addBookmark);
bookmarkRoute.delete(
  "/media/bookmark/delete/:id",
  isAuthenticated,
  deleteBookmark
);
bookmarkRoute.get("/media/bookmark/get", isAuthenticated, getBookmark);
bookmarkRoute.get(
  "/media/bookmark/search/:searchQuery",
  isAuthenticated,
  filterBookmark
);

// exporting
module.exports = { bookmarkRoute };
