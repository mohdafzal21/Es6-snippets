function foo(){
    this.baz = "baz";
    console.log(this.bar + " " + baz);
}

var bar = "bar";

var baz = new foo();

// Four rule
// a Brand new empty object is created
// newly created object gets linked to another object
//newly created object gets passed in as 'this' context to the function call
//if that function does not return its own object -then it implies or return this 

//constructor - any function preceeded with new keyword
// this determination 
// 1. is the function called by new?
// 2. is the function called by call() or apply()
// 3. is the function called by context object
// 4. Default : global object(except strict mode)

