const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/pictureitdone"
);

const jobSeed = [
    {
        title: "I need someone to lay my pipe(s)",
        user: "Joe Mama",
        description: "Just trying to lay some pipe(s)",
        date: new Date(Date.now())
    }
]

db.jobSeed
    .remove({})
    .then(() => db.Job.collection.insertMany(jobSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  