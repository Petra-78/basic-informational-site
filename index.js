const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  console.log("Requested URL:", req.url);

  if (req.url === "/") {
    fs.readFile("./index.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("./about.html", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/contact") {
    fs.readFile("./contact-me.html", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(data);
    });
  } else {
    fs.readFile("./404.html", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(data);
    });
  }
});

server.listen(8080);
