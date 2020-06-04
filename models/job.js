const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: { type: String, required: true },
  user: { type: String, default: "guest" },
  description: String,
  date: { type: Date, default: Date.now },
  image: { type: String,  default: "../image/notfound.png"},
  phone: { type: String },
  email: { type: String }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
