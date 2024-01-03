// let modules  to be  the same as js labraries  a set of  function  you want  to include  in your application
// node.js  has a set of build-in modules  ehich you can  use without any further installation.  

// console.log("core modules")

// to create file nodejs and add statement 
const fs = require("fs");
fs.writeFileSync('read.txt',"welcome to node js");
fs.writeFileSync('read.txt',"welcome to node js , javascript ");
fs.appendFileSync('read.txt',"how are you i am fine ")

// node.js  inlcudes an additional data type  called buffer
// but not available  in browser's javascript
// buffer is mainly used  to store  binary data
// while reading  from a file  or receiving packets over the network.
const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);
// output
// Buffer(54) [119, 101, 108, 99, 111, 109, 101, 32, 116, 111, 32, 110, 111, 100, 101, 32, 106, 115, 32, 44, 32, 106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 32, 104, 111, 119, 32, 97, 114, 101, 32, 121, 111, 117, 32, 105, 32, 97, 109, 32, 102, 105, 110, 101, 32, buffer: ArrayBuffer(8192), byteLength: 54, byteOffset: 408, length: 54, Symbol(Symbol.toStringTag): 'Uint8Array']
org_data = buf_data.toString();
console.log(org_data);

// to rename file
fs.renameSync("read.txt","read and write.txt");