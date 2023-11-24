// challenge time
// 1.create a folder named it as you wish
// 2.create  a file in it named  bio.txt and data into it 
// 3.add more data into the file  at the end of the existing data.
// 4.read  the data without getting  the buffer data first
// 5.rename the file name  to mybio.txt
// 6.now delete both the file and folder

const fs=require('fs');
// fs.mkdirSync("ram"); //folder to create  node.js
fs.writeFileSync('ram/bio.txt', "my name is navnath deshmukh  ");
fs.appendFileSync('ram/bio.txt',"i am good coder i love coding");//add data line 
const data = fs.readFileSync('ram/bio.txt');
console.log(data);
fs.renameSync("ram/bio.txt","ram/mybio.txt");//To rename file 
fs.unlinkSync('ram/mybio.txt'); //To delete file 
fs.rmdirSync("ram"); //To delete folder
