const express = require("express");
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal);
// router.get("/", getGoals);
// router.post("/", setGoal);
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);
// router.put("/:id", updateGoals);
// router.delete("/:id", deleteGoals);

module.exports = router;
