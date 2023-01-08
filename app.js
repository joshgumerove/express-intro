const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Add Product Page</h1>"); // note how we do not call next (order does matter)
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from Express</h1>"); // do not need to set headers ourselves when using Express
});

app.listen(3000); // no longer need to import http and create the server like before

// major benefit of express --> middleware
