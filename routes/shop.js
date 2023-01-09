const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // using get/post makes sure it is an exact match
  console.log("In another middleware");
  res.send("<h1>Hello from Express</h1>"); // do not need to set headers ourselves when using Express
});

module.exports = router;
