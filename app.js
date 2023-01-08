const http = require("http");

const express = require("express"); // space to separate 3rd party packages (just styling)

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); // need to call next in order to travel to the next middleware (or else will not see)
}); // allows us to add a new middleware function (allows request to continue to next middleware in line)

app.use((req, res, next) => {
  console.log("In another middleware");
  // ... send response here
});

const server = http.createServer(app);

server.listen(3000);

// major benefit of express --> middleware
