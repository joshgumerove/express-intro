const express = require("express"); // space to separate 3rd party packages (just styling)

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); // need to call next in order to travel to the next middleware (or else will not see)
}); // allows us to add a new middleware function (allows request to continue to next middleware in line)

app.use((req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from Express</h1>"); // do nott need to set headers ourselves when using Express
  // ... send response here (note: would not be a next middleware in-line (no default response in express))
});

app.listen(3000); // no longer need to import http and create the server like before

// major benefit of express --> middleware
