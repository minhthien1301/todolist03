var mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
  name: String,
  status: String
});

const task = mongoose.model("tasks", tasksSchema);

module.exports = task;
