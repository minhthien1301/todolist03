const Task = require("./../../models/tasks.model");

module.exports.index = async (req, res, next) => {
  var tasks = await Task.find();
  res.json(tasks);
};

module.exports.create = async (req, res, next) => {
  var tasks = await Task.create(req.body);
  res.json(tasks);
};

module.exports.get = async (req, res, next) => {
  const _id = req.params.id;
  const task = await Task.findById({ _id });
  res.json(task);
};

module.exports.delete = async (req, res, next) => {
  const _id = req.params.id;
  const task = await Task.remove({ _id });
  res.json(task);
};

module.exports.update = async (req, res, next) => {
  const _id = req.params.id;
  const task = await Task.findOneAndUpdate({ _id }, req.body);
  res.json(task);
};
