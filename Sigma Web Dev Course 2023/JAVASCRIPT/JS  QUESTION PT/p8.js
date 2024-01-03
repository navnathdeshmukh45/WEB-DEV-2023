// nested object 
let car ={
    make:"toyota",
    model:"camry",
    owner:{
       
        f:"alice",
        l:"johnson",

    }
};
console.log(car);
console.log(car["model"]);
console.log(car["make"]);
console.log(car["owner"]);
console.log(car.owner["f"]);
console.log(car.owner["l"]);
console.log(car.owner.f);
console.log(car.owner.l);