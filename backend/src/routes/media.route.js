const express = require("express");
const {
  trendingMediaController,
  movieMediaController,
  tvMediaController,
} = require("../controllers/media.controller.js");
const {
  movieDetailController,
  tvDetailController,
} = require("../controllers/mediaDetail.controller.js");
const {
  movieImageController,
  tvImageController,
} = require("../controllers/mediaImage.controller.js");
const {
  searchMovieController,
  searchTvController,
  searchAllController,
} = require("../controllers/mediaSearch.controller.js");

// router instances
const mediaRoute = express.Router();

// media routes
mediaRoute.get("/media/trending/:page", trendingMediaController);
mediaRoute.get("/media/movie/:page", movieMediaController);
mediaRoute.get("/media/tv/:page", tvMediaController);

//thumbnail image
mediaRoute.get("/media/movie/image/:movieId", movieImageController);
mediaRoute.get("/media/tv/image/:seriesId", tvImageController);

// details of movies and TvShows routes
mediaRoute.get("/media/movie/detail/:movieId", movieDetailController);
mediaRoute.get("/media/tv/detail/:seriesId", tvDetailController);

//searching movies, Tvshows, and all media routes
mediaRoute.get("/media/movie/search/:searchQuery", searchMovieController);
mediaRoute.get("/media/tv/search/:searchQuery", searchTvController);
mediaRoute.get("/media/all/search/:searchQuery", searchAllController);

// exporting router
module.exports = mediaRoute;
