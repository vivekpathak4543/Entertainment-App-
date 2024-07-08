const express = require("express");
const connectDB = require("./db/index.js");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user.route.js");
const mediaRoute = require("./routes/media.route.js");
const bookmarkRoute = require("./routes/bookmark.route.js");
const cors = require("cors");

const app = express();

//initialize cors
app.use(
  cors({
    origin: "https://entertainment-app-frontend-nqwz.onrender.com/api",
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// user route
app.use("/api", userRoute);

//media route
app.use("/api", mediaRoute);

// bookmark route
app.use("/api", bookmarkRoute);

const port = process.env.PORT || 3000;

connectDB();
app.listen(port, () => console.log(`server is listening on:${port}!`));
