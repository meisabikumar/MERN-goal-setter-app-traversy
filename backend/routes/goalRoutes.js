const express = require("express");
const router = express.Router();
const { getGoals, setGoal, updateGoals, deleteGoals } = require("../controllers/goalControllers");

router.get("/", getGoals);

router.post("/", setGoal);

router.put("/:id", updateGoals);

router.delete("/:id", deleteGoals);

module.exports = router;
