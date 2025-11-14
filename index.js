const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  console.log("Requested URL:", req.url);
  res.writeHead(200, { "Content-type": "text/html" });

  let path = "./";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/contact":
      path += "contact-me.html";
      break;
    default:
      path += "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    res.end(data);
  });
});

server.listen(8080);
