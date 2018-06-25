'use strict';

let Student = function (data) {
    this.name = data.name;
    this.age = data.age;
};

let j = new Student({name:'jo', age: 22});
let s = new  Student({name:'soo', age:23});

console.log(j);
console.log(s);