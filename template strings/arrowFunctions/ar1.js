//es5 
function mapandFiltter(arr){
    return arr.map(function(value){
        return value *2 ;
    }).filter(function(value){
        return value % 3 == 0;
    });
}

mapandFiltter([5,10,15,20]);

//es6

var mapandFiltter = (arr)=> arr.map(value => value * 2 ).filter(value => value % 3 == 0 );


// Arrow functions will not have their own 'this' keyword
//inside arrow function , it will have its own enclosing context

var person = {
    name :" afzal",
    greet : function(){
        setTimeout(()=>{
            
            console.log(`hello ${this.name}`)
        },2000);
    }
}

// Arrow functions will not have the keyword arguments

// var add = (a,b) => {
//     return arguments;
// }



// function mapFilterAndReduce(arr){
//   return arr.map(function(val){
//     return val.firstName
//   }).filter(function(val){
//     return val.length < 5;
//   }).reduce(function(acc,next){
//     acc[next] = next.length
//     return acc;
//   }, {})
// }

let mapFilterAndReduce = (arr) => arr.map(val => val.firstName)
.filter(val => val.length <5)
.reduce((acc,next)=>{
    acc[next] = next.length
    return acc;
},{})

let mapFilterAndReduce = (arr) => arr.map(val => val.firstName).filter(val => val.length < 5)
  .reduce((acc,next) => {
      acc[next] = next.length
      return acc;
}, {})