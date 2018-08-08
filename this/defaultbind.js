function a(){
    console.log(this.b);
}

var b = "b1";
var c = {b: "b2", a:a};
var d = {b :"b3", a:a};

a(); //b1
c.a(); //b2
d.a(); //b3