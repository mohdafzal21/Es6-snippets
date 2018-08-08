this === window  
"use strict";
this ===window;

//node js
console.log(this === global)
console.log(this === module.exports);

//inside function call
function func(){
    "use strict";
    console.log(this===undefined);
}
func();

///
"use strict";
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
const person = Person("J0","D0");
console.log(person);

console.log(global.firstName);
console.log(global.lastName);

/// this in constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

const person = new Person("J", "D");
console.log(person);

//this return in constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
return {
    firstName : "J",
    lastName: "R"
}

}

const person = new Person("J", "D");
console.log(person);


// method calls
const person ={
    firstName: "J"
    sayHi(){
        console.log(${this.firstName})
    }
};
person.sayHi();//John

//second
function sayHi(){
    console.log(${this.firstName})
}

const person = {
    firstName : "J"
};

person.sayHi = sayHi;
person.sayHi();

foo.bar.person.sayHi();
////////////////////////////////
const person = {
    firstName: "J",
    sayHi(){
        console.log(${this.firstName})
    }
};
setTimeout(function(){
    person.sayHi();
},1000);
/////////////////////////////////
const person = {
    firstName: "J",
    sayHi(){
        console.log(${this.firstName})
    }
};
const greet = person.sayHi.bind(person);

greet;

//////////////////////////////





