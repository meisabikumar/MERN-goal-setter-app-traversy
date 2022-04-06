const asyncHandler = require("express-async-handler");

// @route  GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goal !" });
});

// @route  POST /api/goals
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("something went wrong");
  }
  res.status(200).json(req.body);
});

// @route  PUT /api/goals/:id
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @route  DELETE /api/goals/:id
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoals,
  deleteGoals,
};
