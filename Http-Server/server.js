const fs = require("fs");
const http = require("http");

const port = 8080;
const localhost = "localhost";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("after slash");
  } else if (req.url === "/account") {
    res.end("after account it's coming");
  } else if (req.url === "/user") {
    fs.readFile(
      `${__dirname}/userApi/userApiData.json`,
      "utf-8",
      (err, data) => {
        console.log(data);
        res.end(data);
      }
    );
    // res.end(data)
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("page not found!");
  }
});
server.listen(port, localhost, () => {
  console.log(`Server is running on http://${localhost}:${port}`);
});
