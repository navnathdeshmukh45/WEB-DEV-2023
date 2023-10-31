function person(fname, lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.hello = function(){
        console.log(j)
    };
}

let j = new person("priya", "deshmukh", 25);
j.hello();