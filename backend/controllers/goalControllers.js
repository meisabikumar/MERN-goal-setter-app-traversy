// @route  GET /api/goals
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goal !" });
};

// @route  POST /api/goals
const setGoal = (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ message: "error" });
  }
  res.status(200).json(req.body);
};

// @route  PUT /api/goals/:id
const updateGoals = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// @route  DELETE /api/goals/:id
const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoals,
  deleteGoals,
};
