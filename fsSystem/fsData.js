const fs = require("fs");
var data = "I am jyoti chauham and I am from up";
fs.writeFileSync('data.txt', data);
var fData = fs.readFileSync('data.txt')
console.log(fData.toString())
fs.writeFile('fileData.txt', data, (err, result) => {
    if (err) {
        console.log(err,'err')
    }
})

var fDataRead = fs.readFile("fileData.txt", 'utf-8',(err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log(result);
});


