//destructuring nested objects
'use strict';
let parentObject = {
    title: 'import',
    childObject :{
        title: 'export'
    }
};

let {title, childObject : {title: childTitle}} = parentObject;

console.log(childTitle);
console.log(title);