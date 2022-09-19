const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the Home page!");
  } else if (req.url === "/userApi") {
    fs.readFile("userApiData.json", (err, data) => {
      if (err) {
        return console.log(err, "err");
      } else {
        res.end(data.toString());
      }
    });
  } else if (req.url === "/page") {
    res.end("<h1><center>Hi Jyoti Rani Behra</center></h1>");
  } else {
      res.end('<h1><center>Page not found</center></h1>')
  }
});

server.listen(8080, () => {
  console.log(`Server is runing...`);
});
