'use strict';

(function initLoop() {
    function doLoop(x) {


        console.log('loop:',x);
    }

    for(var i=0 ; i< 10; i++){

        doLoop(i+1);
    }

})();