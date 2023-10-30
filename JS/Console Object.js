
console.log("Hello World"); // Prints "Hello World" to the console
console.error("This is an error"); // Prints "This is an error" to the console as an error
console.warn("This is a warning"); // Prints "This is a warning" to the console as a warning
// console.clear(); // Clears the console

 let x = 5;
 console.assert(x == 5, "Error: x is not equal to 5"); // Output: no output
 console.assert(x == 6, "Error: x is not equal to 6"); // Output: Assertion failed: Error: x is not equal to 6

//  console.table()
//It is used to print the output of an array of objects.
let students = [
    {name: "priya", age: 20, city: "New York"},
    {name: "rani", age: 21, city: "London"},
    {name: "shalini", age: 22, city: "usa"}
];
console.table(students);

// console.time() and console.timeEnd()
console.time("Time taken");
let x1 = 5;
let y1 = 6;
let z = x1 + y1;
console.timeEnd("Time taken"); 