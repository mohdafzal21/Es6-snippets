'use strict';

// split an array

function myFunction(name,model){
    console.log(`${name} really likes ${model}` );

}
let args = ['bob', 'hyundai'];

myFunction(...args);
