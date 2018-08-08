var foo = {
    o : {bar : "bar"},
    bar(){
        console.log(this.o.bar);
    }
};

foo.bar();

