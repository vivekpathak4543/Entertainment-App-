const Jwt = require("jsonwebtoken");

// function to generate cookies
const generateCookie = (user, res, statusCode = 200, message) => {
  const token = Jwt.sign({ _id: user._id }, process.env.JWT_KEY);

  res
    .status(201)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    })
    .json({
      success: true,
      message: message,
      data: user,
    });
};

module.exports = generateCookie;
