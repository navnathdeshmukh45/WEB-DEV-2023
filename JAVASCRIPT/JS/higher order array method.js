const numbers = [1, 2, 3, 4, 5];

// Using the map function to create a new array with squared numbers
const squaredNumbers = numbers.map(function (number) {
  return number * number;
});
console.log(numbers);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


console.log("filter array")
// Using the filter function to create a new array with even numbers
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

// reduce
const number = [10, 3, 27, 5, 18];

const max = number.reduce((maxValue, currentValue) => {
  return currentValue > maxValue ? currentValue : maxValue;
}, -Infinity);

console.log(max); // Output: 27

