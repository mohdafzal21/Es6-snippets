// function upper(s) {
//     return s.toUpperCase();
// }
// var who = "reader";
// var text =
//     `A very ${upper( "warm" )} welcome
// to all of you ${upper( `${who}s` )}!`;
// console.log( text );




/// ex 2
function foo(str) {
    var name = "foo";
    console.log( str );
}
function bar() {
    var name = "bar";
    foo( `Hello from ${name}!` );
}
var name = "global";
bar();
