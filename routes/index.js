const path = require("path");
const router = require("express").Router();
const fileRoutes = require("./api");

// API Routes
router.use("/api", fileRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
