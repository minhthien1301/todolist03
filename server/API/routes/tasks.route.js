const express = require("express");
const taskscontroller = require("./../controllers/tasks.controller");
const router = express.Router();

router.get("/", taskscontroller.index);
router.post("/", taskscontroller.create);
router.get("/:id", taskscontroller.get);
router.delete("/:id", taskscontroller.delete);
router.put("/:id", taskscontroller.update);

module.exports = router;
