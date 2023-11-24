// asynchronous is 
const fs = require('fs');
fs.writeFileSync("read.txt","today  is awesome day"),
(err) =>{
console.log("file created");
console.log("err");
};

 fs.appendFile("read.txt",' today is working day')
 //,(err) =>{
//     // console.log("file created");
//     console.log("err");
//     };
