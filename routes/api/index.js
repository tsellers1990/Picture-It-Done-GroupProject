const router = require("express").Router();
const jobRoutes = require("./jobs");
// const apiRoutes = require("./file-upload")

// Job routes
router.use("/jobs", jobRoutes);
//api routes
// router.use("/api", apiRoutes)

module.exports = router;
