const express = require("express");
const bodyParser = require("body-parser"); // recommended to use as 3rd party package

const app = express();

const adminRoutes = require("./routes/admin"); // imports router
const shopRoutes = require("./routes/shop"); // order of the imports does not matter

app.use(bodyParser.urlencoded({ extended: false })); // will not parse all bodies (may at times have to use a different parser)

app.use(adminRoutes);
app.use(shopRoutes); // this order matters

app.use("/", (req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>"); // note how we changed a method before send
});

app.listen(3200);
