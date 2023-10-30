// 10.	Python Program for n-th Fibonacci number
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      let temp = a;
      a = b;
      b = temp + b;
    }
    return b;
  }
  
  const n = parseInt(prompt("Enter the value of n:"));
  const result = fibonacci(n);
  console.log(`The ${n}-th Fibonacci number is ${result}`);
  