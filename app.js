const express = require("express");
const bodyParser = require("body-parser"); // recommended to use as 3rd party package

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // will not parse all bodies (may at times have to use a different parser)

app.use("/", (req, res, next) => {
  console.log("this will always run");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>' // POST request to product page
  );
});

app.post("/product", (req, res, next) => {
  // will now only trigger on incoming post requests
  console.log("about to redirect");
  console.log("request body: ", req.body);
  res.redirect("/"); // note the redirect method added on response by express
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from Express</h1>"); // do not need to set headers ourselves when using Express
});

app.listen(3200); // no longer need to import http and create the server like before

// major benefit of express --> middleware
