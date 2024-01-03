// asynchronous is 
const fs = require('fs');
// fs.writeFileSync("read.txt","today  is awesome day"),
// (err) =>{
// console.log("file created");
// console.log("err");
// };
fs.readFileSync('read.txt', "utf-8",(err,data)=>{
    console.log(data);
});
console.log("after the data")
