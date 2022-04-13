const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");


// @route  POST /api/users
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please add all fileds");
  }

  //   check if user exist
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("user alreday exists");
  }

  //   hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //   create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      eail: user.email,
    });
  } else {
    res.status(400);
    throw new error("Invalid user data");
  }

});

// @desc Auth
// @route  POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

// @desc get user data
// @route  POST /api/users/me
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "user data display" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
