// destructing default
'use strict' ;

function getData({url, method='post'} ={},callback){
    callback(url, method);
}
getData({url:'posturl.com'}, function (url,method) {
    console.log(url,method)
});
getData({url:'posturl.com', method:'put'}, function (url,method) {
    console.log(url,method)
});