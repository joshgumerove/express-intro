const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("In another middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>' // POST request to product page
  );
});

router.post("/product", (req, res, next) => {
  // will now only trigger on incoming post requests
  console.log("about to redirect");
  console.log("request body: ", req.body);
  res.redirect("/"); // note the redirect method added on response by express
});

module.exports = router;

// note the convention for organizing and naming routes
