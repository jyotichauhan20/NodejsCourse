const fs = require('fs')
const myData = {
  name: "jyoti chauhan",
  age: 19,
  faceColor: "fare",
};
const dataString = JSON.stringify(myData);
console.log(dataString);

const data = JSON.parse(dataString);
// fs.writeFile('jsonData.txt', dataString, (err) => {
// })
console.log(data);
