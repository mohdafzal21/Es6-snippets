'use strict';

let classroom = new Set();

let samJ = {name : 'sam', age: 22},
    samP = {name : 'sap', age: 23},
    samK = {name: 'sam', age: 22};

classroom.add(samJ);
classroom.add(samP);

if(classroom.has(samJ)) console.log('samJ is in class');

if(classroom.has(samP)) console.log('samP is in class');

// if(classroom.has(samK)) console.log('samK is in class');
//
// console.log( 'classrom size:',classroom.size)
//
// classroom.delete(samJ);
//
//
// console.log( 'classrom size:',classroom.size)

// // to pass data back to array
// let arrayOftudents = Array.from(classroom);
// console.log(arrayOftudents);
//
// //create a set from an existing array
// let alumni = new Set(arrayOftudents){
//     console.log(alumni);
//     console.log('alumni size :', alumni.size);
// }