const {
  fetchData,
  customizeMediaDetailData,
} = require("../utils/media.utils.js");

// movie detail
const movieDetailController = async (req, res) => {
  try {
    const movieId = req.params.movieId;

    // url editing
    const updatedMovieDetailUrl =
      "https://api.themoviedb.org/3/movie/movie_id?append_to_response=20&language=en-US".replace(
        "movie_id",
        movieId.toString()
      );
    const updatedCastMovieUrl =
      "https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US".replace(
        "movie_id",
        movieId.toString()
      );

    // data fetching with updated url
    const movieData = await fetchData(
      updatedMovieDetailUrl + `&api_key=${process.env.TMDB_KEY}`
    );
    const { cast } = await fetchData(
      updatedCastMovieUrl + `&api_key=${process.env.TMDB_KEY}`
    );

    // response with customize media detail
    res.json({
      success: true,
      data: customizeMediaDetailData(movieData, cast, "movie"),
    });
  } catch (error) {
    // response with error
    res.status(500).json({
      success: false,
      error: "Internal server error in movieDetailController",
    });
  }
};

//  tv detail
const tvDetailController = async (req, res) => {
  try {
    const { seriesId } = req.params;

    // url editing
    const updatedTvDetailUrl =
      "https://api.themoviedb.org/3/tv/series_id?append_to_response=20&language=en-US".replace(
        "series_id",
        seriesId.toString()
      );
    const updatedCastTvUrl =
      "https://api.themoviedb.org/3/tv/series_id/credits?language=en-US".replace(
        "series_id",
        seriesId.toString()
      );

    // data fetching with updated url
    const tvData = await fetchData(
      updatedTvDetailUrl + `&api_key=${process.env.TMDB_KEY}`
    );
    const { cast } = await fetchData(
      updatedCastTvUrl + `&api_key=${process.env.TMDB_KEY}`
    );

    // response with customize tv details
    res.json({
      success: true,
      data: customizeMediaDetailData(tvData, cast, "tv"),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error in tvDetailController",
    });
  }
};

module.exports = {
  movieDetailController,
  tvDetailController,
};
