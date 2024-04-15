require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const validToken = jwt.verify(token, secret);
    req.decodeId = validToken.id;
    next();
  } catch (err) {
    console.log("token is missing or invalid", err.message);
    res.send({
      status: false,
      message: "token is missing or invalid",
    });
  }
};
