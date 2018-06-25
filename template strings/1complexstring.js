'use strict';
let str = `excited to be  are x days untill bootcamp finishes`;

let bootcamp = new Date(new Date().getFullYear(),9,31);

let complexStr = str.replace('x', bootcamp);

console.log(complexStr);