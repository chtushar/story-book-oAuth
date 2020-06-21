const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const Story = require("../models/Story");

//@desc Show Add page
//@route GET /stories/add
router.get("/add", (req, res) => {
  res.render("stories/add");
});

module.exports = router;
