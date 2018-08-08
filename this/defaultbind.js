function a(){
    console.log(this.b);
}

var b = "b1";
var c = {b: "b2", a:a};
var d = {b :"b3", a:a};

a();
c.a();
d.a();