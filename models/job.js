const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: { type: String, required: true },
  user: { type: String, required: true },
  description: String, //look into making this required. threw an error at me but havent looked into it.
  date: { type: Date, default: Date.now },
  image: { data: Buffer, type: String,  default: "../image/notfound.png"},
  phone: { type: String },
  email: { type: String }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
