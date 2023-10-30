// 8.	Python program to print all Prime numbers in an Interval
var l = parseInt(prompt("Enter the value lowest number :"));
var h = parseInt(prompt("Enter the value higher  number :"));
console.log("The prime number between" + l + "and" + h);
for (let i = l; i <= h; i++){
    var f = 0;
    for(let j = 2; j < i;j++){
        if( i % j == 0){
            f =1;
            break;
        }
    }
    if(f == 0 && i !=1){
        console.log(i);
    }
}