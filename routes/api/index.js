const router = require("express").Router();
const jobRoutes = require("./jobs");
const fileRoutes = require("./file-upload")

// Job routes
router.use("/jobs", jobRoutes);
//api routes
router.use("/api", fileRoutes)

module.exports = router;