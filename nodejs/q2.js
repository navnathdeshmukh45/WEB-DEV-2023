// challenge time
// 1.create a folder named it as you wish
// 2.create  a file in it named  bio.txt and data into it 
// 3.add more data into the file  at the end of the existing data.
// 4.read  the data without getting  the buffer data first
// 5.rename the file name  to mybio.txt
// 6.now delete both the file and folder

const fs = require('fs');
// fs.mkdir('thapa', (err) =>{
// console.log("folder create");
// });

// fs.writeFile("./thapa/bio.txt","my name is navnath deshmukh",(err)=>{
//     console.log("file created");
// });

// fs.appendFile('thapa/bio.txt',"i am good coder i love coding",(err)=>{
//     console.log("app end data add");
// });

// fs.readFile('thapa/bio.txt',"utf-8",(err,data)=>{
//     console.log(data);
// });

//  fs.renameSync("thapa/bio.txt","thapa/mybio.txt",
// (err) =>{
//      console.log("rename folder");
//      })
    //To rename file 

// fs.unlinkSync('thapa/mybio.txt',(err) =>{
//     console.log("remove file");
//     }); //To delete file 

fs.rmdirSync("thapa"); //To delete folder