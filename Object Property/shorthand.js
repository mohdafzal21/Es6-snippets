'use strict';

function submit(name, comments ,rating = 5){
    let data = {name , comments, rating};
    for(let key in data){
        console.log(key + ':', data[key]);
    }

}
submit('English', 'great Course' , 9);