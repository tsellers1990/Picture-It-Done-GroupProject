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
      date: new Date(Date.now()),
      image: "../images/notfound.png",
      phone: "(012)345-6789",
      email: "NotReal@DontTryIt.com"
    },
    {
      title: "I need someone to straight pipe my VQ",
      user: "Guy with a 350z",
      description: "If it's louder, it's faster.",
      date: new Date(Date.now()),
      image: "../images/notfound.png",
      phone: "(987)654-3210",
      email: "ThisIsASeed@DontTryIt.com"
    },
    {
      title: "I need someone to build a website for connecting homeowners to contractors",
      user: "helloWorld007",
      description: "I cant pay you, but will trade you a broken RC car and four teddy bears. I can also throw in a towel to sweeten the deal!",
      date: new Date(Date.now()),
      image: "../images/notfound.png",
      phone: "(456)987-1234",
      email: "BadJoke@DontTryIt.com"
    }
];

db.Job
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
  