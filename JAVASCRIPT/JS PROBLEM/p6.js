// 6.	Python Program to check Armstrong Number
let sum = 0;
const num = prompt("Enter the number positive : ");
let temp = num;
while(temp > 0){
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;

    temp = parseInt(temp /10);
}
if (sum == num){
    console.log("Armstrong Number is ",num)
}
else{
    console.log("Armstrong Number is not",num)
}