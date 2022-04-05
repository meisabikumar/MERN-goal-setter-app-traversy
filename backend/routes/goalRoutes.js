const express = require("express");
const router = express.Router();
const { getGoals, setGoal, updateGoals, deleteGoals } = require("../controllers/goalControllers");

router.route("/").get(getGoals).post(setGoal);
// router.get("/", getGoals);
// router.post("/", setGoal);

router.route("/:id").put(updateGoals).delete(deleteGoals);
// router.put("/:id", updateGoals);
// router.delete("/:id", deleteGoals);

module.exports = router;
