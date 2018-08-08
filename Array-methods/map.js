// const numbers = [1,2,3,4,5];
// var evennumbers = [];
//
// for(let i=0; i<numbers.length; i++){
//     evennumbers.push(numbers[i] % 2 ==0);
// }

const numbers = [1,2,34,54,6,343,3454,5];
const even = numbers.map(function(number){
    return number % 2 == 0;
});

even;