'use strict';

(function (){
    const student = {name :'s1'};

    function createStudent(name){
       const student = {name: name};
        console.log(createdata('s2'));
        return student;
        function createdata(name) {
           const  student = {name : name};
            return student;
        }
    }
    console.log(createStudent('s2')); // s2

    console.log(student); // s1
})();








// use let when you need to reassign a variable, or scope a variable at the block level.

//use const when you dont want a variable's value to change throughout the project

