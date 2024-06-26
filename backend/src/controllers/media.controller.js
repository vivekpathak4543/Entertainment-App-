const { fetchData, customizeMediaData } = require("../utils/media.utils.js");

//  trending media
const trendingMediaController = async (req, res) => {
  try {
    const { page } = req.params || 1;

    // fetching data
    const data = await fetchData(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US&page=" +
        page +
        `&api_key=${process.env.TMDB_KEY}`
    );

    // customize response
    res.status(200).json({
      success: true,
      data: customizeMediaData(data.results),
      totalPages: data.total_pages,
    });
  } catch (error) {
    console.error("Error in trendingMediaController:", error);

    // response with error
    res.status(500).json({
      success: false,
      error: "Internal server error in trendingMediaController",
    });
  }
};

// movies media
const movieMediaController = async (req, res) => {
  try {
    const page = req.params.page || 1;

    // fetching data from movieMediaUrl
    const data = await fetchData(
      "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&sort_by=popularity.desc&certification_country=US&certification=R&page=" +
        page +
        `&api_key=${process.env.TMDB_KEY}`
    );

    // Responding with customize data
    res.status(200).json({
      success: true,
      message: "Collection of Movies",
      data: customizeMediaData(data.results, "movie"),
      totalPages: data.total_pages,
    });
  } catch (error) {
    console.error("Error in movieMedia controllers:", error);

    // response with error
    res.status(500).json({
      success: false,
      error: "Internal server error in movie Media",
    });
  }
};

// 03. tv shows media
const tvMediaController = async (req, res) => {
  try {
    const page = req.params.page || 1;

    // fetching data from tvMediaUrl
    const data = await fetchData(
      "https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&sort_by=popularity.desc&page=" +
        page +
        `&api_key=${process.env.TMDB_KEY}`
    );

    // responding with customize data
    res.status(200).json({
      success: true,
      message: "Collection of TvShows",
      data: customizeMediaData(data.results, "tv"),
      totalPages: data.total_pages,
    });
  } catch (error) {
    console.log("error in tvMediaController = ", error);

    // response with error
    res.status(500).json({
      success: false,
      message: "Error in data fetching",
      error: "Internal Server error in Tv Shows",
    });
  }
};

// export module
module.exports = {
  trendingMediaController,
  movieMediaController,
  tvMediaController,
};
