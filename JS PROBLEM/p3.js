// 3.Python Program for factorial of a number
// a=12;
// b=12*11*10*9*8*7*6*5*4*3*2*1
// console.log(b)
function factorial(n){
    if(n==0){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}
const num = 5;
const result = factorial(num);
console.log('The factorial of '+ num + ' is '+ result);
