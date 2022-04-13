// @route  POST /api/users
const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

// @desc Auth
// @route  POST /api/users/login
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

// @desc get user data
// @route  POST /api/users/me
const getMe = (req, res) => {
  res.json({ message: "user data display" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
