const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: { type: String, required: true },
  user: { type: String, required: true },
  description: { String, require: true },
  date: { type: Date, default: Date.now }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
