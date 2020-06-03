const router = require("express").Router();
const jobRoutes = require("./jobs");

// Job routes
router.use("/jobs", jobRoutes);

module.exports = router;
