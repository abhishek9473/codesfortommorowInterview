require("dotenv").config();
const db = require("../models/index.js");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const { User } = db;

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ where: { email: email } });
  if (!existingUser) {
    res.send({
      status: false,
      message: "user not found",
    });
  }

  if (existingUser.password != password) {
    res.send({
      status: false,
      message: " Password not match",
    });
  }

  const token = jwt.sign(
    {
      id: existingUser.id,
      email: existingUser.email,
    },
    secret
  );

  res.send({
    status: true,
    message: "login successfull",
    entity: token,
  });
};
