const express = require("express");

const router = express.Router();

// implicitly /admin/add-product
router.get("/add-product", (req, res, next) => {
  console.log("In another middleware");
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>' // POST request to product page
  );
}); // still need the full path next to the action property

router.post("/add-product", (req, res, next) => {
  console.log("about to redirect");
  console.log("request body: ", req.body);
  res.redirect("/"); // note the redirect method added on response by express
});
// note: same path can be used if methods are different

module.exports = router;
