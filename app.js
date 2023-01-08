const http = require("http");

const express = require("express"); // space to separate 3rd party packages (just styling)

const app = express();

console.log(app);

const server = http.createServer();

server.listen(3000);
