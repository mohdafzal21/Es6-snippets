// //es5
// '<div class="' + className + '">' +
// '<p>' + content + '</p>' +
// '<a href="' + link + '">Let\'s go</a>'
// '</div>';
//
// const content = " this is the content ";
//
// //es6
// `<div class= ${className}>
// <p class="${style}"> ${content} </p>
// <a href="${link}">lets go</a>
// </div>`



//
// // tagged template literal
// function myTaggedLiteral(strings,value1, value2) {
//     console.log(strings,value1,value2);
// }
//
// myTaggedLiteral`test${3}${3+3}`;






function myTaggedLiteral(strings,value,value2) {
    console.log(strings,value, value2);
}
let value = 'Neat';
myTaggedLiteral`test ${value} ${2 + 3}`;









//["test", ""]
// "Neat"
// 5
