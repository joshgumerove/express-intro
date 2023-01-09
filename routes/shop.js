const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html")); // without path core module (would be a file trying to access from OS)
  // __dirname provides absolute path from OS to specific project folder
});

module.exports = router;
