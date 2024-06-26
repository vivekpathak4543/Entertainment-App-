//search movie
const searchMovieController = async (req, res) => {
  try {
    const { searchQuery } = req.params;

    // edit url & fetch data
    const updatedSearchMovieUrl =
      "https://api.themoviedb.org/3/search/movie?query=query_Text&include_adult=true&language=en-US".replace(
        "query_Text",
        searchQuery.toString()
      );
    const data = await fetchData(
      updatedSearchMovieUrl + `&api_key=${process.env.TMDB_KEY}`
    );

    // If no search results are discovered,
    // the function returns the 204 status code (No Content).
    if (data.results.length === 0) {
      return res.status(204).json({
        success: false,
        message: "Page Not Found",
      });
    }

    // response with customized data
    // top 20 results
    res.json({
      success: true,
      data: customizeMediaData(data.results.slice(0, 20), "movie"),
    });
  } catch (error) {
    console.error("Error in searchMovieController:", error);
    // response with error
    res.status(500).json({
      success: false,
      error: "Internal server error in searchMovieController",
    });
  }
};

//search tv shows
const searchTvController = async (req, res) => {
  try {
    const { searchQuery } = req.params;

    // edit url & fetch data
    const updatedSearchTvUrl =
      "https://api.themoviedb.org/3/search/tv?query=query_Text&include_adult=true&language=en-US".replace(
        "query_Text",
        searchQuery.toString()
      );
    const data = await fetchData(
      updatedSearchTvUrl + `&api_key=${process.env.TMDB_KEY}`
    );

    // If no search results are discovered,
    // the function returns the 204 status code (No Content).
    if (data.results.length === 0) {
      return res.status(204).json({
        success: false,
        message: "Page Not Found",
      });
    }

    // response with customized data
    // top 20 results
    res.json({
      success: true,
      data: customizeMediaData(data.results.slice(0, 20)),
    });
  } catch (error) {
    console.error("Error in searchTvController:", error);
    // response with error
    res.status(500).json({
      success: false,
      error: "Internal server error in searchTvController",
    });
  }
};

// 03. search all media
const searchAllController = async (req, res) => {
  try {
    const { searchQuery } = req.params;

    // edit url
    const updatedSearchAllUrl =
      "https://api.themoviedb.org/3/search/multi?query=query_Text&include_adult=true&language=en-US".replace(
        "query_Text",
        searchQuery.toString()
      );

    // fetch data
    const data = await fetchData(
      updatedSearchAllUrl + `&api_key=${process.env.TMDB_KEY}`
    );

    // If no search results are discovered,
    // the function returns the 204 status code (No Content).
    if (data.results.length === 0) {
      return res.status(204).json({
        success: false,
        message: "Page Not Found",
      });
    }

    // response with customized data
    // top 20 results
    res.json({
      success: true,
      data: customizeMediaData(data.results.slice(0, 20)),
    });
  } catch (error) {
    // handling error in console .
    // console.error("Error in SearchAllController:", error);

    // response with error
    res.status(500).json({
      success: false,
      error: "Internal server error in SearchAllController",
    });
  }
};

module.exports = {
  searchMovieController,
  searchTvController,
  searchAllController,
};
