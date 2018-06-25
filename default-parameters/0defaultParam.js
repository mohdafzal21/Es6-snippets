'use strict';


function greet(name = "bob" , timeOfDay ="afternoon"){
  // name = name || "bob";
  // timeOfDay = timeOfDay || "morning";
    console.log( `Good ${timeOfDay} , ${name}`);

}

greet();









//
// function greet(name , timeOfDay){
//     name = name || 'Param';
//     timeOfDay = timeOfDay ||
//         Day;
//     console.log( `Good ${timeOfDay} , ${name}`);
// }
//
// function greet(name ='PAra' , timeOfDay='Day'){
//     console.log( `Good ${timeOfDay} , ${name}`);
// }
// greet(undefined, afternoon);